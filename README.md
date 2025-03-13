# Pathway AI Landing Page

A modern, high-converting landing page for Pathway AI, an AI-powered learning assistant that creates personalized learning paths.

## Project Overview

This landing page is designed to collect emails from interested users while clearly describing the product's value. The design is clean, engaging, and optimized for conversions.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Email Collection**: Two strategically placed email collection forms with Supabase integration
- **Modern UI**: Clean, trust-building design with a blue color scheme
- **Interactive Elements**: FAQ accordion, form validation, and subtle animations
- **Conversion Optimized**: Clear value proposition and multiple CTAs

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript for interactive elements
- `config.js` - Supabase configuration
- `supabase_setup.sql` - SQL for setting up Supabase tables
- `images/` - Directory containing images
  - `dashboard-mockup.svg` - SVG mockup of the AI dashboard

## Getting Started

1. Clone this repository
2. Set up Supabase (see Supabase Setup below)
3. Update the `config.js` file with your Supabase credentials
4. Open `index.html` in your browser

## Supabase Setup

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to the SQL Editor in your Supabase dashboard
4. Run the SQL commands from `supabase_setup.sql` to create the necessary tables and security policies
5. Get your Supabase URL and anon key:
   - Go to Project Settings > API
   - Copy the URL and anon key
   - Update these values in `config.js`

```javascript
// In config.js
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your URL
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your key
```

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2563eb; /* Deep blue */
    --primary-hover: #1d4ed8;
    --accent-color: #06b6d4; /* Bright cyan for accents */
    /* ... other variables ... */
}
```

### Content

Update the content in `index.html` to match your specific product details.

## Browser Support

This landing page is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use.

## Credits

- Fonts: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Database: [Supabase](https://supabase.com/) 