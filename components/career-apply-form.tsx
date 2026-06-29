"use client"

import { useRef, useState, type ChangeEventHandler, type FormEvent } from "react"

type SubmissionState = {
  message: string
  type: "idle" | "success" | "error"
}

type FieldName = "name" | "email" | "phone" | "bio" | "resume"
type FieldErrors = Partial<Record<FieldName, string>>

const initialState: SubmissionState = {
  message: "",
  type: "idle",
}

function hasNonMissingError(error?: string) {
  return !!error && !error.endsWith("is missing.")
}

export function CareerApplyForm({ jobTitle }: { jobTitle: string }) {
  const [state, setState] = useState<SubmissionState>(initialState)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submissionInProgress = useRef(false)

  function clearFieldError(field: FieldName) {
    setFieldErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[field]
      return nextErrors
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (submissionInProgress.current) {
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const bio = String(formData.get("bio") ?? "").trim()
    const resume = formData.get("resume")

    const nextFieldErrors: FieldErrors = {}

    if (!name) {
      nextFieldErrors.name = "Name is missing."
    }

    if (!email) {
      nextFieldErrors.email = "Email is missing."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextFieldErrors.email = "Please enter a valid email address."
    }

    if (!phone) {
      nextFieldErrors.phone = "Phone is missing."
    }

    if (!bio) {
      nextFieldErrors.bio = "Bio is missing."
    }

    if (!(resume instanceof File) || resume.size === 0) {
      nextFieldErrors.resume = "CV/Resume is missing."
    } else if (!/\.(pdf|doc|docx)$/i.test(resume.name)) {
      nextFieldErrors.resume = "Please upload a PDF, DOC, or DOCX resume."
    } else if (resume.size > 10 * 1024 * 1024) {
      nextFieldErrors.resume = "The resume must be 10 MB or smaller."
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors)
      setState(initialState)
      return
    }

    submissionInProgress.current = true
    setIsSubmitting(true)
    setFieldErrors({})
    setState(initialState)

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      })

      const data: { success?: boolean; message?: string } | null = await response
        .json()
        .catch(() => null)

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message || "Unable to submit your application. Please try again."
        )
      }

      form.reset()
      setFieldErrors({})
      setState({
        message: "Your application has been submitted successfully.",
        type: "success",
      })
    } catch (error) {
      setState({
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit your application. Please try again.",
        type: "error",
      })
    } finally {
      submissionInProgress.current = false
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card-glow rounded-2xl border-2 border-white/60 p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(41,179,255,0.5)]"
    >
      <input type="hidden" name="jobTitle" value={jobTitle} />
      <input type="hidden" name="phoneRequired" value="true" />
      <h2 className="font-display text-xl font-semibold text-foreground">Apply for this position</h2>
      <div className="mt-5 space-y-4">
        <FormField
          label="Full Name *"
          name="name"
          required
          error={fieldErrors.name}
          onChange={() => clearFieldError("name")}
        />
        <FormField
          label="Email *"
          name="email"
          type="email"
          required
          error={fieldErrors.email}
          onChange={() => clearFieldError("email")}
        />
        <FormField
          label="Phone *"
          name="phone"
          type="tel"
          required
          error={fieldErrors.phone}
          onChange={() => clearFieldError("phone")}
        />
        <div>
          <label htmlFor="bio" className="text-xs font-medium text-muted-foreground">Bio *</label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            required
            aria-describedby={fieldErrors.bio ? "bio-error" : undefined}
            aria-invalid={!!fieldErrors.bio}
            className={`mt-1 w-full rounded-lg border bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_18px_-4px_rgba(41,179,255,0.45)] focus:border-primary/60 focus:shadow-[0_0_22px_-4px_rgba(41,179,255,0.6)] ${
              hasNonMissingError(fieldErrors.bio) ? "border-red-500/80" : "border-white/30"
            }`}
            onChange={() => clearFieldError("bio")}
          />
          {fieldErrors.bio && (
            <p id="bio-error" className="mt-2 text-sm text-red-500" role="alert">
              {fieldErrors.bio}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="resume" className="text-xs font-medium text-muted-foreground">Upload CV/Resume *</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            aria-describedby={fieldErrors.resume ? "resume-error" : undefined}
            aria-invalid={!!fieldErrors.resume}
            className={`mt-1 w-full rounded-lg border bg-background/60 px-3 py-2 text-xs text-muted-foreground outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_18px_-4px_rgba(41,179,255,0.45)] focus:border-primary/60 focus:shadow-[0_0_22px_-4px_rgba(41,179,255,0.6)] file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary-foreground ${
              hasNonMissingError(fieldErrors.resume) ? "border-red-500/80" : "border-white/30"
            }`}
            onChange={() => clearFieldError("resume")}
          />
          {fieldErrors.resume && (
            <p id="resume-error" className="mt-2 text-sm text-red-500" role="alert">
              {fieldErrors.resume}
            </p>
          )}
          <p className="mt-1 text-[11px] text-muted-foreground">Allowed Type:pdf, doc, docx.</p>
        </div>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
      {state.type === "success" && (
        <p className="mt-4 text-sm text-green-500" role="status" aria-live="polite">
          {state.message}
        </p>
      )}
      {state.type === "error" && (
        <p className="mt-4 text-sm text-red-500" role="alert">
          {state.message}
        </p>
      )}
    </form>
  )
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(41,179,255,0.7)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  )
}

function FormField({
  label,
  name,
  type = "text",
  required,
  error,
  onChange,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
        onChange={onChange}
        className={`mt-1 w-full rounded-lg border bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_18px_-4px_rgba(41,179,255,0.45)] focus:border-primary/60 focus:shadow-[0_0_22px_-4px_rgba(41,179,255,0.6)] ${
          hasNonMissingError(error) ? "border-red-500/80" : "border-white/30"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
