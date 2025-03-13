// Supabase Configuration
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your Supabase project URL
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase anon/public key

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY); 