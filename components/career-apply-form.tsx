"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ChangeEventHandler, type FormEvent } from "react"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
  const [state, setState] = useState<SubmissionState>(initialState)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submissionInProgress = useRef(false)

  useEffect(() => {
    if (state.type !== "success") {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setState(initialState)
      router.push("/")
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [router, state.type])

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
      nextFieldErrors.bio = "Message is missing."
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
    <>
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
            <label htmlFor="bio" className="text-xs font-medium text-muted-foreground">Message *</label>
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
        {state.type === "error" && (
          <p className="mt-4 text-sm text-red-500" role="alert">
            {state.message}
          </p>
        )}
      </form>
      {state.type === "success" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="career-success-title"
          aria-describedby="career-success-description"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/20 bg-slate-950 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.95)]">
            <div
              className="absolute inset-0 opacity-90"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at top, rgba(41,179,255,0.35), transparent 42%), linear-gradient(135deg, rgba(15,23,42,0.98), rgba(8,47,73,0.94) 55%, rgba(14,116,144,0.9))",
              }}
            />
            <div
              className="absolute -right-12 top-8 h-36 w-36 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative px-7 py-8 text-center sm:px-9">
              <div className="success-check mx-auto h-20 w-20">
                <Image
                  src="/images/msg sent.svg"
                  alt=""
                  width={80}
                  height={80}
                  aria-hidden="true"
                  className="success-check-art h-20 w-20 object-contain"
                  priority
                />
              </div>
              <h2 id="career-success-title" className="mt-6 font-display text-3xl font-semibold tracking-tight">
                Application Submitted
              </h2>
              <p
                id="career-success-description"
                className="mt-3 text-sm leading-6 text-slate-200/90"
              >
                Thank you for sumitting your resume. Our team will get back to you soon.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-slate-300/70">
                Redirecting to home........
              </p>
            </div>
            <style jsx>{`
              .success-check {
                animation: success-pop 1s ease-out both;
                overflow: visible;
              }

              .success-check-art {
                animation:
                  success-launch 1.15s cubic-bezier(0.2, 0.9, 0.25, 1) 0.08s both,
                  success-drift 2.6s ease-in-out 1.25s infinite;
                transform-origin: center;
                filter: drop-shadow(0 12px 24px rgba(0, 202, 105, 0.22));
              }

              @keyframes success-pop {
                0% {
                  opacity: 0;
                  transform: scale(0.72);
                }
                70% {
                  opacity: 1;
                  transform: scale(1.08);
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes success-launch {
                0% {
                  opacity: 0;
                  transform: translate(-26px, 18px) scale(0.78) rotate(-18deg);
                }
                58% {
                  opacity: 1;
                  transform: translate(10px, -14px) scale(1.08) rotate(7deg);
                }
                78% {
                  opacity: 1;
                  transform: translate(2px, -4px) scale(1.02) rotate(1deg);
                }
                100% {
                  opacity: 1;
                  transform: translate(0, 0) scale(1) rotate(0deg);
                }
              }

              @keyframes success-drift {
                0%,
                100% {
                  transform: translate(0, 0) scale(1) rotate(0deg);
                }
                50% {
                  transform: translate(2px, -3px) scale(1.02) rotate(1deg);
                }
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  )
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-full bg-[linear-gradient(90deg,#2fa8f5_0%,#39b3ff_100%)] px-8 py-3.5 text-base font-semibold text-slate-950 shadow-[0_14px_34px_-14px_rgba(57,179,255,0.95),0_0_28px_-12px_rgba(57,179,255,0.7)] transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
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
