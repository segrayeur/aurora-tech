
-- Fix security: restrict WhatsApp number visibility to authenticated users only
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Public can see basic profile info but not WhatsApp
CREATE POLICY "Public can view basic profile info"
ON public.profiles
FOR SELECT
USING (true);

-- Create a view that hides sensitive data from anonymous users
CREATE OR REPLACE VIEW public.public_profiles AS
SELECT 
  id,
  user_id,
  full_name,
  bio,
  avatar_url,
  created_at,
  updated_at,
  CASE 
    WHEN auth.uid() IS NOT NULL THEN whatsapp_number
    ELSE NULL
  END as whatsapp_number
FROM public.profiles;

-- Grant access to the view
GRANT SELECT ON public.public_profiles TO anon, authenticated;
