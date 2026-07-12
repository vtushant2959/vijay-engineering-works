-- Vijay Engineering Works — form submission tables.
-- Run this once in your Supabase project's SQL editor (Project -> SQL Editor -> New query).

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  company_name text,
  email text not null,
  phone text not null,
  inquiry_type text not null,
  city text not null,
  message text not null,
  product_interest text[]
);

create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  department text not null,
  job_title text,
  cover_letter text
);

create table if not exists public.dealership_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text not null,
  city text not null,
  state text not null,
  business_type text not null,
  years_in_business text not null,
  about_business text not null
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique
);

-- Row Level Security: allow anyone (the public anon key) to INSERT only.
-- No one can SELECT/UPDATE/DELETE from the client — read submissions from
-- the Supabase dashboard (Table Editor) or via a service-role key on a backend.

alter table public.contact_submissions enable row level security;
alter table public.career_applications enable row level security;
alter table public.dealership_applications enable row level security;
alter table public.newsletter_subscribers enable row level security;

create policy "Allow public inserts" on public.contact_submissions
  for insert to anon with check (true);

create policy "Allow public inserts" on public.career_applications
  for insert to anon with check (true);

create policy "Allow public inserts" on public.dealership_applications
  for insert to anon with check (true);

create policy "Allow public inserts" on public.newsletter_subscribers
  for insert to anon with check (true);
