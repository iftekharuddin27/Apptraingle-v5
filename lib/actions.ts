"use server"

import { Resend } from "resend"
import { ContactFormEmail } from "@/components/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.CONTACT_FORM_TO_EMAIL || "info@apptriangle.com"
const careerToEmail = "info@apptriangle.com"

export async function sendContactMessage(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = (formData.get("company") as string) || undefined
  const message = formData.get("message") as string

  if (!name || !email || !phone || !message) {
    return { message: "Please fill out all required fields.", success: false, error: true }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Must be a verified domain on Resend
      to: [toEmail],
      subject: "New Message from Apptriangle Contact Form",
      reply_to: email,
      react: ContactFormEmail({
        name,
        email,
        phone,
        company,
        message,
      }),
    })

    if (error) {
      console.error("Resend error:", error)
      return { message: "Something went wrong. Please try again later.", success: false, error: true }
    }

    return { message: "Thank you for your message! We will get back to you shortly.", success: true, error: false }
  } catch (exception) {
    console.error("Exception sending email:", exception)
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false, error: true,
    }
  }
}

export async function sendCareerApplication(prevState: any, formData: FormData) {
  const jobTitle = formData.get("jobTitle") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const bio = formData.get("bio") as string
  const resume = formData.get("resume")

  if (!jobTitle || !name || !email || !phone || !bio) {
    return { message: "Please fill out all required fields.", success: false, error: true }
  }

  const attachments = []

  if (resume instanceof File && resume.size > 0) {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    if (!allowedTypes.includes(resume.type)) {
      return { message: "Please upload a PDF, DOC, or DOCX resume.", success: false, error: true }
    }

    const arrayBuffer = await resume.arrayBuffer()
    attachments.push({
      filename: resume.name,
      content: Buffer.from(arrayBuffer),
    })
  }

  try {
    const { error } = await resend.emails.send({
      from: "Career Application <onboarding@resend.dev>",
      to: [careerToEmail],
      subject: `New Job Application: ${jobTitle}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
          <h2>New Job Application</h2>
          <p><strong>Position:</strong> ${escapeHtml(jobTitle)}</p>
          <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <h3>Bio</h3>
          <p>${escapeHtml(bio).replace(/\n/g, "<br />")}</p>
          ${attachments.length ? "<p>The applicant's resume is attached.</p>" : "<p>No resume was attached.</p>"}
        </div>
      `,
      attachments,
    })

    if (error) {
      console.error("Resend career application error:", error)
      return { message: "Something went wrong. Please try again later.", success: false, error: true }
    }

    return { message: "Your application has been submitted successfully.", success: true, error: false }
  } catch (exception) {
    console.error("Exception sending career application:", exception)
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
      error: true,
    }
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
