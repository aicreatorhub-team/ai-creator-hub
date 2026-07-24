-- AI Creator Hub SaaS Core Database

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade unique,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now()
);


create table if not exists credits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade unique,
  balance integer default 100,
  plan text default 'free',
  updated_at timestamp with time zone default now()
);


create table if not exists ai_generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  tool text not null,
  input text,
  output text,
  credits_used integer default 1,
  created_at timestamp with time zone default now()
);


create table if not exists usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  tool text,
  action text,
  created_at timestamp with time zone default now()
);


create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade unique,
  plan text default 'free',
  status text default 'active',
  stripe_customer_id text,
  created_at timestamp with time zone default now()
);


-- Security

alter table profiles enable row level security;
alter table credits enable row level security;
alter table ai_generations enable row level security;
alter table usage_logs enable row level security;
alter table subscriptions enable row level security;


-- User access policies

create policy "Users can view own profile"
on profiles for select
using (auth.uid() = user_id);


create policy "Users can view own credits"
on credits for select
using (auth.uid() = user_id);


create policy "Users can view own generations"
on ai_generations for select
using (auth.uid() = user_id);


create policy "Users can view own usage"
on usage_logs for select
using (auth.uid() = user_id);


create policy "Users can view own subscription"
on subscriptions for select
using (auth.uid() = user_id);