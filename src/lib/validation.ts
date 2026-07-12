import { z } from 'zod';

const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().regex(phoneRegex, 'Enter a valid phone number'),
  inquiryType: z.string().min(1, 'Select an inquiry type'),
  city: z.string().trim().min(2, 'Enter your city'),
  message: z.string().trim().min(10, 'Tell us a bit more (at least 10 characters)'),
  consent: z.boolean().refine((val) => val === true, { message: 'Please confirm you agree to be contacted' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const careerApplicationSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().regex(phoneRegex, 'Enter a valid phone number'),
  department: z.string().min(1, 'Select a department'),
  coverLetter: z.string().trim().optional().or(z.literal('')),
  consent: z.boolean().refine((val) => val === true, { message: 'Please confirm you agree to be contacted' }),
});

export type CareerApplicationFormValues = z.infer<typeof careerApplicationSchema>;

export const dealershipSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  companyName: z.string().trim().min(2, 'Enter your company name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().regex(phoneRegex, 'Enter a valid phone number'),
  city: z.string().trim().min(2, 'Enter your city'),
  state: z.string().trim().min(2, 'Enter your state'),
  businessType: z.string().min(1, 'Select your current business type'),
  yearsInBusiness: z.string().min(1, 'Enter years in business'),
  aboutBusiness: z.string().trim().min(20, 'Tell us a bit more (at least 20 characters)'),
  consent: z.boolean().refine((val) => val === true, { message: 'Please confirm you agree to be contacted' }),
});

export type DealershipFormValues = z.infer<typeof dealershipSchema>;
