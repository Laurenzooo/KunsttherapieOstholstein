# Project Instructions for AI Agents

Welcome! To maintain the quality and consistency of the **Mikela Blanck Kunsttherapie** project, please follow these guidelines.

## 1. Single Source of Truth: Business Info
**NEVER hardcode addresses, phone numbers, or emails.**
All business-related metadata (NAP - Name, Address, Phone) is centralized in:
- [src/config/businessInfo.ts](file:///Users/laurenzblanck/Documents/Websites/Mikela-Blanck-Kunsttherapie/src/config/businessInfo.ts)

If you need to update contact info or opening hours, **only edit that file.** All other pages (Footer, Contact, Impressum, Datenschutz, and Local SEO Schema) pull from this config.

## 2. Local SEO & Schema
- The site uses **JSON-LD LocalBusiness Schema** injected via [Layout.astro](file:///Users/laurenzblanck/Documents/Websites/Mikela-Blanck-Kunsttherapie/src/layouts/Layout.astro).
- Ensure any changes to the business structure (e.g., adding a new location) are reflected in this schema.

## 3. GDPR & Privacy (Two-Click Map)
- We use a **GDPR-compliant Two-Click Solution** for Google Maps.
- The map component is located at `src/components/ui/GDPRMap.tsx`.
- **CRITICAL**: Do not load Google Maps scripts or iframes directly in any page. Always use the `GDPRMap` component to ensure no data is sent to Google before the user gives consent.

## 4. Content Management (Sanity)
- **Blog Posts and Categories**: are managed via Sanity.
- Schema definitions are in the `/sanity` folder.
- Fetching is done via `src/lib/sanity.js`.
- For static pages (Home, About, etc.), the content is currently in the React/Astro components, but consider moving to Sanity if the user requests more editability.

## 5. Technology Stack
- **Framework**: Astro (Pages) + React (Components).
- **Styling**: Tailwind CSS + shadcn/ui.
- **Icons**: Lucide React.
- **Deployment**: Lovable (Vite base).

## 6. Coding Standards
- Use **TypeScript** for all new components.
- Maintain a **clean, premium aesthetic** as defined in the `index.css`.
- Ensure all images have descriptive `alt` tags and `loading="lazy"` where appropriate.
