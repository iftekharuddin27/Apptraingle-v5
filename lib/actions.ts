"use server"

import { Resend } from "resend"
import { ContactFormEmail } from "@/components/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.CONTACT_FORM_TO_EMAIL || "info@apptriangle.com"

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
