-- Create a table for the waitlist emails
CREATE TABLE waitlist (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    signup_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on the email column for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Set up Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from the client
-- but prevents reading, updating, or deleting
CREATE POLICY "Allow anonymous inserts" ON waitlist
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Prevent reading of data from the client
CREATE POLICY "No reads" ON waitlist
    FOR SELECT
    TO anon
    USING (false);

-- Prevent updates from the client
CREATE POLICY "No updates" ON waitlist
    FOR UPDATE
    TO anon
    USING (false);

-- Prevent deletes from the client
CREATE POLICY "No deletes" ON waitlist
    FOR DELETE
    TO anon
    USING (false); 