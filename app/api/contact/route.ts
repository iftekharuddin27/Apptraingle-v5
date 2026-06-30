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

function getMissingEnvVars() {
  const requiredEnvVars = [
    "ZEPTOMAIL_API_TOKEN",
    "ZEPTOMAIL_FROM_EMAIL",
    "ZEPTOMAIL_FROM_NAME",
    "CONTACT_RECEIVER_EMAIL",
  ] as const

  return requiredEnvVars.filter((envVar) => !process.env[envVar])
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body.name || "").trim()
    const company = String(body.company || "").trim()
    const phone = String(body.phone || "").trim()
    const email = String(body.email || "").trim()
    const message = String(body.message || "").trim()

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Name, email, and message are required.",
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

    const missingEnvVars = getMissingEnvVars()

    if (missingEnvVars.length > 0) {
      console.error(
        "Contact API missing environment variable(s):",
        missingEnvVars.join(", ")
      )

      return Response.json(
        {
          success: false,
          message: "Contact form is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      )
    }

    const zeptoToken = process.env.ZEPTOMAIL_API_TOKEN!
    const fromEmail = process.env.ZEPTOMAIL_FROM_EMAIL!
    const fromName = process.env.ZEPTOMAIL_FROM_NAME!
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL!
    const clientReference = `contact-${Date.now()}`

    const safeName = escapeHtml(name)
    const safeCompany = company ? escapeHtml(company) : ""
    const safePhone = phone ? escapeHtml(phone) : ""
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />")

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
              name: "AppTriangle Info",
            },
          },
        ],
        reply_to: [
          {
            address: email,
            name,
          },
        ],
        subject: `New Contact Message from ${name}`,
        htmlbody: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Contact Form Message</h2>
            <p><strong>Reference:</strong> ${clientReference}</p>
            <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
              <tbody>
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${safeEmail}</td>
                </tr>
                ${
                  safePhone
                    ? `
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${safePhone}</td>
                </tr>
                `
                    : ""
                }
                ${
                  safeCompany
                    ? `
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${safeCompany}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${safeMessage}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        client_reference: clientReference,
        track_opens: true,
        track_clicks: true,
      }),
    })

    const zeptoData = await zeptoResponse.json().catch(() => null)

    if (!zeptoResponse.ok) {
      console.error("ZeptoMail contact API error:", zeptoResponse.status, zeptoData)

      return Response.json(
        {
          success: false,
          message: "Unable to send your message right now. Please try again later.",
        },
        { status: 502 }
      )
    }

    return Response.json({
      success: true,
      message: "Email sent successfully.",
      clientReference,
      data: zeptoData,
    })
  } catch (error) {
    console.error("Contact API Error:", error)

    return Response.json(
      {
        success: false,
        message: "Server error while sending email.",
      },
      { status: 500 }
    )
  }
}
