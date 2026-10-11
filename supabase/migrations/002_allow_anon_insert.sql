-- Run once in Supabase → SQL Editor for project cfzuypbljirmibmxpabi.
-- Lets the anon key insert a lead. It does not allow reading, updating, or deleting rows.

grant insert on table public.enclave to anon, authenticated;

drop policy if exists enclave_anon_insert on public.enclave;

create policy enclave_anon_insert
on public.enclave
for insert
to anon, authenticated
with check (
  char_length(first_name) between 1 and 80
  and char_length(last_name) between 1 and 80
  and char_length(email) between 3 and 200
  and char_length(phone) between 7 and 30
  and char_length(model) between 1 and 4000
  and char_length(collection) <= 200
  and char_length(source) <= 200
  and char_length(form_name) <= 200
);
