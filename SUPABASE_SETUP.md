# Supabase Backend Setup Guide

This guide will help you set up the Supabase backend for CultureCompass.

## Prerequisites

- A Supabase account (free tier available at https://supabase.com)
- Node.js and npm installed

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New project"
3. Fill in your project details:
   - Name: `culturecompass` (or your preferred name)
   - Database Password: Choose a strong password
   - Region: Select the closest region to your users
4. Wait for the project to be created (takes ~2 minutes)

## Step 2: Create Database Tables

Once your project is ready, go to the SQL Editor and run these commands:

### Create Stories Table

```sql
CREATE TABLE stories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  title TEXT NOT NULL,
  "shortDescription" TEXT NOT NULL,
  story TEXT NOT NULL,
  "videoUrl" TEXT,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Enable read access for all users" ON stories
  FOR SELECT USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Enable insert access for all users" ON stories
  FOR INSERT WITH CHECK (true);
```

### Create Events Table

```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "eventName" TEXT NOT NULL,
  "hostName" TEXT NOT NULL,
  "eventDate" TEXT NOT NULL,
  "eventLocation" TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  "shortDescription" TEXT NOT NULL,
  "eventUrl" TEXT NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Enable read access for all users" ON events
  FOR SELECT USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Enable insert access for all users" ON events
  FOR INSERT WITH CHECK (true);
```

### Create People Table

```sql
CREATE TABLE people (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  pronouns TEXT NOT NULL,
  "heritageLocation" TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  "userDescription" TEXT NOT NULL,
  "contactInfo" TEXT,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE people ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Enable read access for all users" ON people
  FOR SELECT USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Enable insert access for all users" ON people
  FOR INSERT WITH CHECK (true);
```

## Step 3: Get Your API Keys

1. In your Supabase project dashboard, click on the "Settings" icon (gear) in the left sidebar
2. Click on "API" in the settings menu
3. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

## Step 4: Configure Environment Variables

1. In your project root, create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace the values with your actual Supabase credentials

**Important:** Never commit your `.env.local` file to Git. It's already in `.gitignore`.

## Step 5: Test Your Setup

1. Install dependencies (if not already done):
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

4. Try submitting a story, event, or person profile

5. Check your Supabase dashboard > Table Editor to verify the data was saved

## Optional: Add Sample Data

You can add sample data directly in Supabase:

1. Go to Table Editor in your Supabase dashboard
2. Select the table you want to populate
3. Click "Insert row" and fill in the data

## Troubleshooting

### "Failed to fetch" errors

- Make sure your `.env.local` file has the correct values
- Restart your development server after adding environment variables
- Check that your Supabase project is running (green status in dashboard)

### Row Level Security (RLS) errors

- Verify that the policies were created correctly in the SQL Editor
- You can temporarily disable RLS for testing (not recommended for production)

### CORS errors

- Supabase allows all origins by default for the anon key
- If you're still getting CORS errors, check your browser console for details

## Next Steps

### Add Authentication (Optional)

To add user authentication:

1. Enable authentication providers in Supabase (Settings > Authentication)
2. Install Supabase Auth helpers:
```bash
npm install @supabase/auth-helpers-nextjs
```

3. Modify the RLS policies to check for authenticated users

### Add File Storage (Optional)

To allow users to upload images/videos:

1. Create a storage bucket in Supabase (Storage > New bucket)
2. Set up RLS policies for the bucket
3. Update your forms to handle file uploads

### Production Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Add the same environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Redeploy your application

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
