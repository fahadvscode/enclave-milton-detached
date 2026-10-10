import { z } from "zod";

export const homeTypeValues = ["detached", "townhome", "either"] as const;
export const budgetValues = [
  "under_1_2m",
  "1_2m_1_5m",
  "1_5m_2m",
  "2m_plus",
  "not_sure",
] as const;
export const buyerTypeValues = ["end_user", "investor"] as const;
export const timelineValues = [
  "ready_now",
  "3_6_months",
  "6_12_months",
  "researching",
] as const;

export const homeTypeOptions = [
  { value: "detached", label: "Detached" },
  { value: "townhome", label: "Townhome" },
  { value: "either", label: "Either" },
] as const;

export const budgetOptions = [
  { value: "under_1_2m", label: "Under $1.2M" },
  { value: "1_2m_1_5m", label: "$1.2M–$1.5M" },
  { value: "1_5m_2m", label: "$1.5M–$2M" },
  { value: "2m_plus", label: "$2M+" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export const buyerTypeOptions = [
  { value: "end_user", label: "End user" },
  { value: "investor", label: "Investor" },
] as const;

export const timelineOptions = [
  { value: "ready_now", label: "Ready now" },
  { value: "3_6_months", label: "3–6 months" },
  { value: "6_12_months", label: "6–12 months" },
  { value: "researching", label: "Just researching" },
] as const;

const optionalEnum = (values: readonly [string, ...string[]]) =>
  z.union([z.enum(values), z.literal("")]).optional();

export const leadSchema = z.object({
  firstName: z.string().trim().min(1, "Enter a first name.").max(80),
  lastName: z.string().trim().min(1, "Enter a last name.").max(80),
  email: z
    .string()
    .trim()
    .min(1, "Enter an email address.")
    .email("Enter a valid email address.")
    .max(200),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone number.")
    .max(30)
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
    }, "Enter a valid phone number."),
  homeTypeInterest: z.enum(homeTypeValues, { message: "Select a home type." }),
  budgetRange: optionalEnum(budgetValues),
  buyerType: optionalEnum(buyerTypeValues),
  timeline: optionalEnum(timelineValues),
  message: z.string().trim().max(1000, "Message must be under 1,000 characters.").optional(),
  isBroker: z.boolean(),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required to register.",
  }),
  honeypot: z.string().max(200).optional(),
  submittedAt: z.number(),
  pagePath: z.string().trim().min(1).max(200),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

export function emptyToNull(value: string | undefined) {
  if (!value) return null;
  return value;
}
