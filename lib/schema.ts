import { z } from "zod";

export const DETACHED_MODEL = "Detached Homes";

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
  model: z.string().trim().min(1, "Select a model.").max(200),
  honeypot: z.string().max(200).optional(),
  submittedAt: z.number(),
  pagePath: z.string().trim().min(1).max(200),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
