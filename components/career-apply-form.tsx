"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { sendCareerApplication } from "@/lib/actions"

const initialState = {
  message: "",
  success: false,
  error: false,
}

export function CareerApplyForm({ jobTitle }: { jobTitle: string }) {
  const [state, formAction] = useActionState(sendCareerApplication, initialState)

  return (
    <form
      action={formAction}
      className="card-glow rounded-2xl border-2 border-white/60 p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)]"
    >
      <input type="hidden" name="jobTitle" value={jobTitle} />
      <h2 className="font-display text-xl font-semibold text-foreground">Apply for this position</h2>
      <div className="mt-5 space-y-4">
        <FormField label="Full Name *" name="name" required />
        <FormField label="Email *" name="email" type="email" required />
        <FormField label="Phone *" name="phone" type="tel" required />
        <div>
          <label htmlFor="bio" className="text-xs font-medium text-muted-foreground">Bio *</label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            required
            className="mt-1 w-full rounded-lg border border-white/30 bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="resume" className="text-xs font-medium text-muted-foreground">Upload CV/Resume *</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            className="mt-1 w-full rounded-lg border border-white/30 bg-background/60 px-3 py-2 text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary-foreground"
          />
          <p className="mt-1 text-[11px] text-muted-foreground">Allowed Type:pdf, doc, docx.</p>
        </div>
        <SubmitButton />
      </div>
      {state.success && (
        <p className="mt-4 text-sm text-green-500">{state.message}</p>
      )}
      {state.error && (
        <p className="mt-4 text-sm text-red-500">{state.message}</p>
      )}
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(41,179,255,0.7)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  )
}

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-white/30 bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  )
}
