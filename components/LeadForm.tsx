"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DETACHED_MODEL, leadSchema, type LeadFormValues } from "@/lib/schema";
import { caslConsent } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function LeadForm({
  pagePath,
  idPrefix = "",
  compact = false,
}: {
  pagePath: string;
  idPrefix?: string;
  compact?: boolean;
}) {
  const fid = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const started = useRef(false);
  const mountedAt = useRef<number>(Date.now());

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      model: DETACHED_MODEL,
      honeypot: "",
      submittedAt: Date.now(),
      pagePath,
    },
  });

  useEffect(() => {
    mountedAt.current = Date.now();
    setValue("submittedAt", mountedAt.current);
    setValue("pagePath", pagePath);
  }, [pagePath, setValue]);

  function markStart() {
    if (started.current) return;
    started.current = true;
    trackEvent("form_start", { page_path: pagePath });
  }

  async function onSubmit(values: LeadFormValues) {
    setStatus("submitting");
    setServerError("");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          pagePath,
          submittedAt: mountedAt.current,
        }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setServerError(payload?.error || "Something went wrong — please try again.");
        return;
      }
      let stored = false;
      try {
        sessionStorage.setItem("enclave_detached_lead", pagePath);
        stored = true;
      } catch {
        stored = false;
      }
      if (!stored) trackEvent("form_submit", { page_path: pagePath });
      window.location.href = "/thank-you";
    } catch {
      setStatus("error");
      setServerError("Something went wrong — please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={compact ? "card grid gap-3 p-4 sm:p-5" : "card grid gap-5"}
      aria-describedby={fid("form-status")}
    >
      <div className="grid grid-cols-2 gap-3">
        <Field label="First name" error={errors.firstName?.message} id={fid("firstName")}>
          <input
            id={fid("firstName")}
            className="field-input"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            {...register("firstName")}
            onFocus={markStart}
          />
        </Field>
        <Field label="Last name" error={errors.lastName?.message} id={fid("lastName")}>
          <input
            id={fid("lastName")}
            className="field-input"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            {...register("lastName")}
            onFocus={markStart}
          />
        </Field>
      </div>
      <Field label="Email" error={errors.email?.message} id={fid("email")}>
        <input
          id={fid("email")}
          type="email"
          className="field-input"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          {...register("email")}
          onFocus={markStart}
        />
      </Field>
      <Field label="Phone" error={errors.phone?.message} id={fid("phone")}>
        <input
          id={fid("phone")}
          type="tel"
          className="field-input"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          {...register("phone")}
          onFocus={markStart}
        />
      </Field>
      <Field label="Model" error={errors.model?.message} id={fid("model")}>
        <select id={fid("model")} className="field-input" {...register("model")} onFocus={markStart}>
          <option value={DETACHED_MODEL}>{DETACHED_MODEL}</option>
        </select>
      </Field>
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={fid("company-website")}>Company website</label>
        <input id={fid("company-website")} type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>
      <input type="hidden" {...register("submittedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("pagePath")} />
      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Register for Updates"}
      </button>
      <p className="text-sm leading-snug text-text-muted">{caslConsent}</p>
      <div id={fid("form-status")} aria-live="polite">
        {status === "error" ? (
          <p role="alert" className="field-error">
            {serverError}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
