-- Run this against the shared Supabase project (cfzuypbljirmibmxpabi) via the SQL Editor.
-- If enclave_milton_leads already exists (created for enclavemilton.com), this script
-- is written to be idempotent: it creates the table only if missing, and adds the
-- site_source column only if missing, rather than failing or duplicating the table.

create table if not exists enclave_milton_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  home_type_interest text,
  budget_range text,
  buyer_type text,
  timeline text,
  consent boolean not null default false,
  consent_timestamp timestamptz,
  page_path text,
  site_source text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table enclave_milton_leads add column if not exists site_source text;
alter table enclave_milton_leads add column if not exists home_type_interest text;
alter table enclave_milton_leads add column if not exists budget_range text;
alter table enclave_milton_leads add column if not exists buyer_type text;
alter table enclave_milton_leads add column if not exists timeline text;
alter table enclave_milton_leads add column if not exists consent boolean default false;
alter table enclave_milton_leads add column if not exists consent_timestamp timestamptz;
alter table enclave_milton_leads add column if not exists page_path text;
alter table enclave_milton_leads add column if not exists utm_source text;
alter table enclave_milton_leads add column if not exists utm_medium text;
alter table enclave_milton_leads add column if not exists utm_campaign text;
alter table enclave_milton_leads add column if not exists utm_term text;
alter table enclave_milton_leads add column if not exists utm_content text;
alter table enclave_milton_leads add column if not exists notes text;

alter table enclave_milton_leads enable row level security;

drop policy if exists "anon can insert enclave_milton_leads" on enclave_milton_leads;
create policy "anon can insert enclave_milton_leads"
  on enclave_milton_leads for insert
  to anon
  with check (true);
