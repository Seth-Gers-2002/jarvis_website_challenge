# Seymour Plumbing — Website

A modern, responsive website for Seymour Plumbing built with Next.js 16, React, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Email**: EmailJS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (connect your Gmail or other email provider)
3. Create an Email Template. Use these template variables:
   - `{{name}}` — sender's full name
   - `{{phone}}` — sender's phone number
   - `{{email}}` — sender's email
   - `{{service}}` — selected service
   - `{{message}}` — message body
4. Copy your credentials:

```bash
cp .env.local.example .env.local
```

Then fill in `.env.local` with your EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## Deployment (Vercel — Recommended)

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy

## Replacing Placeholder Images

All placeholder image blocks are marked with descriptive labels in the UI. To replace them:

- Open the relevant component or page file
- Find the placeholder div (they contain `"placeholder"` in the label text)
- Replace with a Next.js `<Image>` component:

```tsx
import Image from "next/image";

<Image
  src="/images/your-photo.jpg"
  alt="Seymour Plumbing team"
  fill
  className="object-cover"
/>
```

- Add your images to the `/public/images/` directory

## Project Structure

```
app/
  layout.tsx       # Root layout (Navbar + Footer)
  page.tsx         # Home page
  about/
    page.tsx       # About Us page
  globals.css      # Global styles + design tokens

components/
  Navbar.tsx       # Sticky responsive navigation
  Footer.tsx       # Site footer
  ContactForm.tsx  # EmailJS-powered contact form
```

## Business Details

- **Business**: Seymour Plumbing
- **Location**: Smithfield QLD 4878
- **Phone**: 0420 909 405
