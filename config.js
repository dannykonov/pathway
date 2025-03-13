// Supabase Configuration
const SUPABASE_URL = 'https://hkigwxgkfzfpkllcepat.supabase.co'; // Your Supabase project URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhraWd3eGdrZnpmcGtsbGNlcGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjcyMTMsImV4cCI6MjA1NzQwMzIxM30.ndB7L6A-T4ldzG5GWODGWe9U2BP9vQmoiT0ImIoHHcw'; // Your Supabase anon/public key

// Initialize Supabase client
let supabase = null;

// Create a function to initialize Supabase that doesn't rely on the global window.supabase
function initializeSupabase() {
  try {
    // Check if the supabaseClient is available directly
    if (typeof supabaseClient !== 'undefined') {
      supabase = supabaseClient.createClient(SUPABASE_URL, SUPABASE_KEY);
      console.log('Supabase initialized with supabaseClient');
      return;
    }
    
    // Check if it's available on window
    if (window.supabase) {
      supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      console.log('Supabase initialized with window.supabase');
      return;
    }
    
    // Check if it's available as createClient directly
    if (typeof createClient !== 'undefined') {
      supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
      console.log('Supabase initialized with createClient');
      return;
    }
    
    console.error('Could not find Supabase client library');
  } catch (error) {
    console.error('Error initializing Supabase:', error);
  }
}

// Try to initialize when the script loads
document.addEventListener('DOMContentLoaded', function() {
  // Try to initialize immediately
  initializeSupabase();
  
  // If that fails, try again after a delay
  if (!supabase) {
    setTimeout(initializeSupabase, 1000);
    
    // Try one more time after a longer delay
    setTimeout(function() {
      if (!supabase) {
        console.log('Final attempt to initialize Supabase');
        initializeSupabase();
      }
    }, 3000);
  }
}); 