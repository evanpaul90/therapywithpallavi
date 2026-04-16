"use client";

import { useState } from "react";
import { clsx } from "clsx";

type Status = "idle" | "submitting" | "success" | "error";

const PRIOR_OPTIONS = [
  { value: "first-time", label: "This would be my first time" },
  { value: "some", label: "Some experience" },
  { value: "yes", label: "Yes, I've been in therapy before" },
];

const TIME_OPTIONS = [
  { value: "weekday-morning", label: "Weekday mornings" },
  { value: "weekday-afternoon", label: "Weekday afternoons" },
  { value: "weekday-evening", label: "Weekday evenings" },
  { value: "weekend", label: "Weekends" },
];

export function IntakeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Something didn't send.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something didn't send. Try again, or reach me directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-divider bg-surface p-10">
        <p className="cap-label">Sent</p>
        <p className="font-[var(--font-display)] text-[26px] text-navy mt-4 leading-snug">
          Thank you. I&rsquo;ll be in touch within 24 hours.
        </p>
        <p className="text-[15px] text-muted mt-4">
          If something is urgent, you can also message me on WhatsApp or email
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <Field label="Your name" name="name" required>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="form-input"
        />
      </Field>

      <Field label="Email" name="email" required>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="form-input"
        />
      </Field>

      <Field label="WhatsApp number" name="whatsapp" hint="optional">
        <input
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          className="form-input"
        />
      </Field>

      <Field
        label="What brings you here right now?"
        name="reason"
        hint="A sentence is enough."
        required
      >
        <textarea
          name="reason"
          required
          rows={4}
          className="form-input form-textarea"
        />
      </Field>

      <Field label="Have you been in therapy before?" name="prior" required>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PRIOR_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 border border-divider bg-surface px-4 py-3 text-[14px] cursor-pointer hover:border-teal transition-colors"
            >
              <input
                type="radio"
                name="prior"
                value={opt.value}
                required
                className="accent-teal"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field label="When tends to work for sessions?" name="time">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TIME_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 border border-divider bg-surface px-4 py-3 text-[14px] cursor-pointer hover:border-teal transition-colors"
            >
              <input
                type="checkbox"
                name="time"
                value={opt.value}
                className="accent-teal"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field
        label="Anything you'd like me to know before we speak?"
        name="other"
        hint="optional"
      >
        <textarea
          name="other"
          rows={3}
          className="form-input form-textarea"
        />
      </Field>

      {status === "error" && (
        <p className="text-[14px]" style={{ color: "var(--color-rust)" }}>
          {errorMessage}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={clsx("btn-primary", status === "submitting" && "opacity-60")}
        >
          {status === "submitting" ? "Sending…" : "Send"}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background: var(--color-surface);
          border: 1px solid var(--color-divider);
          border-radius: 4px;
          padding: 14px 16px;
          font-family: var(--font-body);
          font-size: 16px;
          color: var(--color-ink);
          transition: border-color 150ms ease-out;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-teal);
        }
        .form-textarea {
          resize: vertical;
          min-height: 96px;
          line-height: 1.55;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  name,
  hint,
  required,
  children,
}: {
  label: string;
  name: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label htmlFor={name} className="cap-label">
          {label}
          {required && <span className="ml-1 text-rust">*</span>}
        </label>
        {hint && <span className="text-[12px] text-muted">{hint}</span>}
      </div>
      {children}
    </div>
  );
}
