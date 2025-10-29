-- Seed sample profiles (run after creating auth users)
-- Note: Replace the UUIDs with actual user IDs from auth.users table
insert into public.profiles (id, email, full_name, profession, bio, trust_score, verified, category) values
  ('00000000-0000-0000-0000-000000000001', 'sarah@example.com', 'Sarah Anderson', 'Product Designer', 'Passionate about creating beautiful and intuitive user experiences', 4.8, true, 'designers'),
  ('00000000-0000-0000-0000-000000000002', 'alex@example.com', 'Alex Chen', 'Full Stack Developer', 'Building scalable web applications with modern technologies', 4.9, true, 'developers'),
  ('00000000-0000-0000-0000-000000000003', 'emma@example.com', 'Emma Wilson', 'Content Writer', 'Crafting compelling narratives and engaging content', 4.7, true, 'writers'),
  ('00000000-0000-0000-0000-000000000004', 'marcus@example.com', 'Marcus Johnson', 'Startup Founder', 'Building innovative solutions for real-world problems', 4.6, true, 'entrepreneurs'),
  ('00000000-0000-0000-0000-000000000005', 'lisa@example.com', 'Lisa Park', 'UI/UX Designer', 'Designing delightful digital experiences', 4.8, true, 'designers')
on conflict (id) do nothing;
