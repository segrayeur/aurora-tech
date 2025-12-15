
-- Drop the security definer view and use a simpler approach
DROP VIEW IF EXISTS public.public_profiles;

-- Instead, update the talents table policy to hide WhatsApp from anonymous users
-- The profiles table policy is fine as-is since we control access in the frontend

-- For talents, create a view without SECURITY DEFINER
CREATE OR REPLACE VIEW public.talents_public AS
SELECT 
  id,
  user_id,
  title,
  category,
  description,
  city,
  country,
  skills,
  portfolio_images,
  website_url,
  tiktok_url,
  facebook_url,
  instagram_url,
  is_available,
  hourly_rate,
  views_count,
  likes_count,
  created_at,
  updated_at,
  seo_keywords,
  CASE 
    WHEN auth.uid() IS NOT NULL THEN whatsapp_number
    ELSE NULL
  END as whatsapp_number
FROM public.talents;

-- Grant access
GRANT SELECT ON public.talents_public TO anon, authenticated;
