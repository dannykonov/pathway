// Supabase Configuration - HARDCODED VALUES TO PREVENT PLACEHOLDER SUBSTITUTION
const SUPABASE_URL = 'https://hkigwxgkfzfpkllcepat.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhraWd3eGdrZnpmcGtsbGNlcGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjcyMTMsImV4cCI6MjA1NzQwMzIxM30.ndB7L6A-T4ldzG5GWODGWe9U2BP9vQmoiT0ImIoHHcw';

// Initialize Supabase client
let supabase = null;

// Create a function to initialize Supabase that doesn't rely on the global window.supabase
function initializeSupabase() {
  try {
    console.log('Initializing Supabase with URL:', SUPABASE_URL);
    
    // Validate URL format first
    try {
      new URL(SUPABASE_URL);
      console.log('Supabase URL is valid');
    } catch (urlError) {
      console.error('Invalid Supabase URL format:', urlError);
      return;
    }
    
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
    
    // If we get here, try to load the script dynamically
    console.log('Supabase client not found, attempting to load script dynamically');
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = function() {
      console.log('Supabase script loaded dynamically');
      if (window.supabase) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('Supabase initialized after dynamic script load');
      } else {
        console.error('Supabase script loaded but client not available');
      }
    };
    script.onerror = function(error) {
      console.error('Failed to load Supabase script dynamically:', error);
    };
    document.head.appendChild(script);
    
  } catch (error) {
    console.error('Error initializing Supabase:', error);
  }
}

// Try to initialize when the script loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, attempting to initialize Supabase...');
  
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

// Site configuration
const config = {
    siteName: 'Pathway AI',
    siteDescription: 'Pathway AI - Empowering businesses with AI-driven insights',
    contactEmail: 'hello@pathway.ai',
    socialLinks: {
        twitter: 'https://twitter.com/pathway_ai',
        linkedin: 'https://linkedin.com/company/pathway-ai',
        github: 'https://github.com/pathway-ai'
    }
};

// Export config for use in other files
if (typeof module !== 'undefined') {
    module.exports = config;
} 