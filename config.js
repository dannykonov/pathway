// Supabase Configuration
const SUPABASE_URL = 'https://hkigwxgkfzfpkllcepat.supabase.co'; // Your Supabase project URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhraWd3eGdrZnpmcGtsbGNlcGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjcyMTMsImV4cCI6MjA1NzQwMzIxM30.ndB7L6A-T4ldzG5GWODGWe9U2BP9vQmoiT0ImIoHHcw'; // Your Supabase anon/public key

// Initialize Supabase client
let supabase;
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Access the Supabase client from the global window object
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('Supabase initialized successfully');
    } catch (error) {
        console.error('Error initializing Supabase:', error);
    }
}); 