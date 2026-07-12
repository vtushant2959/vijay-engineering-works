import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project-ref')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type SubmitResult = { ok: true } | { ok: false; error: string };

const NOT_CONFIGURED_ERROR =
  "We can't accept submissions right now — our online form isn't fully connected yet. Please call or WhatsApp us instead and we'll help immediately.";

async function insertRow(table: string, values: Record<string, unknown>): Promise<SubmitResult> {
  if (!supabase) {
    return { ok: false, error: NOT_CONFIGURED_ERROR };
  }
  const { error } = await supabase.from(table).insert(values);
  if (error) {
    return { ok: false, error: 'Something went wrong submitting your details. Please try again or contact us directly.' };
  }
  return { ok: true };
}

export interface ContactSubmission {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  inquiryType: string;
  city: string;
  message: string;
  productInterest?: string[];
}

export function submitContactForm(data: ContactSubmission): Promise<SubmitResult> {
  return insertRow('contact_submissions', {
    full_name: data.fullName,
    company_name: data.companyName || null,
    email: data.email,
    phone: data.phone,
    inquiry_type: data.inquiryType,
    city: data.city,
    message: data.message,
    product_interest: data.productInterest && data.productInterest.length ? data.productInterest : null,
  });
}

export interface CareerApplication {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  jobTitle?: string;
  coverLetter?: string;
}

export function submitCareerApplication(data: CareerApplication): Promise<SubmitResult> {
  return insertRow('career_applications', {
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    department: data.department,
    job_title: data.jobTitle || null,
    cover_letter: data.coverLetter || null,
  });
}

export interface DealershipApplication {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  businessType: string;
  yearsInBusiness: string;
  aboutBusiness: string;
}

export function submitDealershipApplication(data: DealershipApplication): Promise<SubmitResult> {
  return insertRow('dealership_applications', {
    full_name: data.fullName,
    company_name: data.companyName,
    email: data.email,
    phone: data.phone,
    city: data.city,
    state: data.state,
    business_type: data.businessType,
    years_in_business: data.yearsInBusiness,
    about_business: data.aboutBusiness,
  });
}

export async function subscribeToNewsletter(email: string): Promise<SubmitResult> {
  return insertRow('newsletter_subscribers', { email });
}
