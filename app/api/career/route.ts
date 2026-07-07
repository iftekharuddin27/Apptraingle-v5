const MAX_RESUME_SIZE = 10 * 1024 * 1024

const RESUME_MIME_TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
}

const FIELD_ALIASES = {
  name: ["name", "fullName", "applicantName"],
  email: ["email", "applicantEmail"],
  phone: ["phone", "mobile", "phoneNumber"],
  jobTitle: ["jobTitle", "position", "role", "designation"],
  experience: ["experience"],
  portfolio: ["portfolio"],
  linkedin: ["linkedin"],
  github: ["github"],
  message: ["message", "coverLetter", "note"],
  phoneRequired: ["phoneRequired"],
} as const

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function formatLabel(key: string) {
  if (key === "bio") {
    return "Message"
  }

  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim()
}

function getMissingEnvVars() {
  const requiredEnvVars = [
    "CAREER_ZEPTOMAIL_API_TOKEN",
    "CAREER_ZEPTOMAIL_FROM_EMAIL",
    "CAREER_ZEPTOMAIL_FROM_NAME",
    "CAREER_RECEIVER_EMAIL",
  ] as const

  return requiredEnvVars.filter((envVar) => !process.env[envVar])
}

function getResumeMimeType(file: File) {
  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase()
  const expectedMimeType = RESUME_MIME_TYPES[extension]

  if (!expectedMimeType) {
    return null
  }

  if (
    file.type &&
    file.type !== "application/octet-stream" &&
    file.type !== expectedMimeType
  ) {
    return null
  }

  return expectedMimeType
}

async function parseCareerRequest(req: Request) {
  const contentType = req.headers.get("content-type") || ""

  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData()
    const fields = new Map<string, string>()
    let resumeFile: File | null = null

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (value.size > 0) {
          resumeFile = value
          fields.set(key, value.name)
        }
        continue
      }

      fields.set(key, value.trim())
    }

    return { fields, resumeFile }
  }

  const body = await req.json()
  const fields = new Map<string, string>()

  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    if (value === undefined || value === null) {
      continue
    }

    fields.set(key, String(value).trim())
  }

  return { fields, resumeFile: null }
}

function getFirstField(
  fields: Map<string, string>,
  keys: readonly string[]
) {
  for (const key of keys) {
    const value = fields.get(key)
    if (value) {
      return value
    }
  }

  return ""
}

function hasFieldKey(
  fields: Map<string, string>,
  keys: readonly string[]
) {
  return keys.some((key) => fields.has(key))
}

function buildRowsHtml(fields: Map<string, string>) {
  return Array.from(fields.entries())
    .filter(([key, value]) => key !== "phoneRequired" && key !== "resume" && value)
    .map(([key, value], index, entries) => {
      const label = escapeHtml(formatLabel(key))
      const safeValue = escapeHtml(value).replaceAll("\n", "<br />")
      const topPadding = index === 0 ? "12px" : "6px"
      const bottomPadding = index === entries.length - 1 ? "12px" : "6px"

      return `
        <tr>
          <td style="padding: ${topPadding} 12px ${bottomPadding} 16px; width: 88px; font-size: 16px; font-weight: 400; color: #111; vertical-align: top;">${label}</td>
          <td style="padding: ${topPadding} 12px ${bottomPadding} 8px; font-size: 16px; color: #111;">${safeValue}</td>
        </tr>
      `
    })
    .join("")
}

export async function POST(req: Request) {
  try {
    const { fields, resumeFile } = await parseCareerRequest(req)

    const name = getFirstField(fields, FIELD_ALIASES.name)
    const email = getFirstField(fields, FIELD_ALIASES.email)
    const phone = getFirstField(fields, FIELD_ALIASES.phone)
    const jobTitle = getFirstField(fields, FIELD_ALIASES.jobTitle)
    const phoneRequiredValue = getFirstField(fields, FIELD_ALIASES.phoneRequired)
    const phoneRequired = phoneRequiredValue.toLowerCase() === "true"

    if (!name || !email) {
      return Response.json(
        {
          success: false,
          message: "Applicant name and email are required.",
        },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      )
    }

    if (
      phoneRequired &&
      hasFieldKey(fields, FIELD_ALIASES.phone) &&
      !phone
    ) {
      return Response.json(
        {
          success: false,
          message: "Phone is required for this application.",
        },
        { status: 400 }
      )
    }

    if (resumeFile) {
      const resumeMimeType = getResumeMimeType(resumeFile)

      if (!resumeMimeType) {
        return Response.json(
          {
            success: false,
            message: "Please upload a PDF, DOC, or DOCX resume.",
          },
          { status: 400 }
        )
      }

      if (resumeFile.size > MAX_RESUME_SIZE) {
        return Response.json(
          {
            success: false,
            message: "The resume must be 10 MB or smaller.",
          },
          { status: 400 }
        )
      }
    }

    const missingEnvVars = getMissingEnvVars()

    if (missingEnvVars.length > 0) {
      console.error(
        "Career API missing environment variable(s):",
        missingEnvVars.join(", ")
      )

      return Response.json(
        {
          success: false,
          message: "Career application is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      )
    }

    const zeptoToken = process.env.CAREER_ZEPTOMAIL_API_TOKEN!
    const fromEmail = process.env.CAREER_ZEPTOMAIL_FROM_EMAIL!
    const fromName = process.env.CAREER_ZEPTOMAIL_FROM_NAME!
    const receiverEmail = process.env.CAREER_RECEIVER_EMAIL!
    const clientReference = `career-${Date.now()}`
    const subject = jobTitle
      ? `New Career Application - ${jobTitle.replaceAll(/[\r\n]/g, " ")}`
      : "New Career Application"

    const rowsHtml = buildRowsHtml(fields)
    const attachments =
      resumeFile && getResumeMimeType(resumeFile)
        ? [
            {
              content: Buffer.from(await resumeFile.arrayBuffer()).toString("base64"),
              mime_type: getResumeMimeType(resumeFile),
              name:
                resumeFile.name
                  .split(/[\\/]/)
                  .pop()
                  ?.replace(/[\r\n"]/g, "_")
                  .slice(0, 255) || "resume",
            },
          ]
        : []

    const zeptoResponse = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: zeptoToken,
      },
      body: JSON.stringify({
        from: {
          address: fromEmail,
          name: fromName,
        },
        to: [
          {
            email_address: {
              address: receiverEmail,
              name: "Apptriangle Careers",
            },
          },
        ],
        reply_to: [
          {
            address: email,
            name,
          },
        ],
        subject,
        htmlbody: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="margin: 0 0 14px; font-size: 16px; font-weight: 700; color: #111;">Career Application Submission</h2>
            <table style="border-collapse: separate; border-spacing: 0; width: 100%; max-width: 700px; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        `,
        attachments,
        client_reference: clientReference,
        track_opens: true,
        track_clicks: true,
      }),
    })

    const zeptoData = await zeptoResponse.json().catch(() => null)

    if (!zeptoResponse.ok) {
      console.error("Career ZeptoMail Error:", zeptoResponse.status, zeptoData)

      return Response.json(
        {
          success: false,
          message: "Unable to send your career application right now. Please try again later.",
        },
        { status: 502 }
      )
    }

    return Response.json({
      success: true,
      message: "Career application sent successfully.",
      clientReference,
      data: zeptoData,
    })
  } catch (error) {
    console.error("Career API Error:", error)

    return Response.json(
      {
        success: false,
        message: "Server error while sending career application.",
      },
      { status: 500 }
    )
  }
}
