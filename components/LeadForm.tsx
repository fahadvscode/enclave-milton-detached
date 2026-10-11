"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  budgetOptions,
  buyerTypeOptions,
  homeTypeOptions,
  leadSchema,
  timelineOptions,
  type LeadFormValues,
} from "@/lib/schema";
import { caslConsent } from "@/lib/content";
import { getStoredUtm } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";

export function LeadForm({ pagePath, idPrefix = "" }: { pagePath: string; idPrefix?: string }) {
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
      homeTypeInterest: undefined,
      budgetRange: "",
      buyerType: "",
      timeline: "",
      message: "",
      isBroker: false,
      consent: false,
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
          siteSource: "theenclavedetached.com",
          submittedAt: mountedAt.current,
          ...getStoredUtm(),
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
      className="card grid gap-5"
      aria-describedby={fid("form-status")}
    >
      <div className="grid gap-5 md:grid-cols-2">
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
      <div className="grid gap-5 md:grid-cols-2">
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
      </div>
      <Field label="Home type interest" error={errors.homeTypeInterest?.message} id={fid("homeTypeInterest")}>
        <select
          id={fid("homeTypeInterest")}
          className="field-input"
          defaultValue=""
          aria-invalid={Boolean(errors.homeTypeInterest)}
          {...register("homeTypeInterest")}
          onFocus={markStart}
        >
          <option value="" disabled>
            Select a home type
          </option>
          {homeTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Budget range (optional)" error={errors.budgetRange?.message} id={fid("budgetRange")}>
          <select id={fid("budgetRange")} className="field-input" defaultValue="" {...register("budgetRange")}>
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline (optional)" error={errors.timeline?.message} id={fid("timeline")}>
          <select id={fid("timeline")} className="field-input" defaultValue="" {...register("timeline")}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <fieldset>
        <legend className="field-label">Buyer type (optional)</legend>
        <div className="flex flex-wrap gap-4">
          {buyerTypeOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-base">
              <input type="radio" value={option.value} {...register("buyerType")} name={fid("buyerType")} />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Message (optional)" error={errors.message?.message} id={fid("message")}>
        <textarea
          id={fid("message")}
          rows={3}
          className="field-input"
          placeholder="Deletion requests can be written here."
          {...register("message")}
        />
      </Field>
      <label className="flex items-start gap-3 text-base leading-snug">
        <input type="checkbox" className="mt-1" {...register("isBroker")} />
        <span>Are you a licensed real estate agent?</span>
      </label>
      <div>
        <label className="flex items-start gap-3 text-base leading-snug">
          <input
            type="checkbox"
            className="mt-1"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? fid("consent-error") : undefined}
            {...register("consent")}
          />
          <span>{caslConsent}</span>
        </label>
        {errors.consent ? (
          <p id={fid("consent-error")} className="field-error">
            {errors.consent.message}
          </p>
        ) : null}
      </div>
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={fid("company-website")}>Company website</label>
        <input id={fid("company-website")} type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>
      <input type="hidden" {...register("submittedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("pagePath")} />
      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Register for Updates"}
      </button>
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
