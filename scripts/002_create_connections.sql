-- Create connections table
create table if not exists public.connections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  connected_user_id uuid not null references auth.users(id) on delete cascade,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, connected_user_id)
);

-- Enable RLS
alter table public.connections enable row level security;

-- Create RLS policies
create policy "connections_select_own"
  on public.connections for select
  using (auth.uid() = user_id or auth.uid() = connected_user_id);

create policy "connections_insert_own"
  on public.connections for insert
  with check (auth.uid() = user_id);

create policy "connections_update_own"
  on public.connections for update
  using (auth.uid() = user_id);

create policy "connections_delete_own"
  on public.connections for delete
  using (auth.uid() = user_id);
