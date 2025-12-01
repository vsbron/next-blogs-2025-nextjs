# NextBlogs

NextBlogs is a multi-user blogging platform built with **Next.js**, **Clerk**, **Prisma**, and **Supabase**.  
It offers a clean, responsive environment for reading, writing, and discovering content, with full authentication, profiles, and post management tools.  
The platform focuses on clarity, modular design, and a smooth reading and writing experience.

---

## Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Page Descriptions](#page-descriptions)
   - [Home Page](#home-page)
   - [Post Page](#post-page)
   - [Author Page](#author-page)
   - [Dashboard](#dashboard)
   - [Additional Pages](#additional-pages)
4. [Technical Details](#technical-details)
5. [Live Version](#live-version)

---

## Project Core principles

- Simple and clean interface
- Reusable, modular components
- Secure authentication
- Clear separation between public routes and dashboard features

---

### UI / UX Features

- 🏠 **Home Page** with featured posts, recent posts, stats, and CTA
- 🔥 **Trending Posts** page based on recent activity
- 🗂️ **Full Post Filtering & Pagination** (category, popularity, views, date)
- ❤️ **Like and Share Buttons** for posts with real-time updates
- 🧑‍🤝‍🧑 **Author List Page** with filters & pagination
- 🔍 **Search Bar** placeholder (UI done, logic pending)
- 🌙 **Light/Dark Theme Toggle**
- 📱 **Fully Responsive Layout**

### Backend / Logic Features

- 👤 **User Authentication** via Clerk (accounts stored in Prisma/Supabase and linked by `clerkId`)
- 📊 **Dashboard**: profile settings, user posts, liked posts, and basic stats
- ✏️ **Editable User Profile** (avatar, bio, socials, country, gender)
- ✍️ **Add, Edit, Delete Posts** with a Quill WYSIWYG editor
- 🔒 **Secure Data Storage** in Supabase Postgres, managed through Prisma
- 🔄 **Server Actions** + **React Query** for fetching dynamic lists
- 📦 **Metadata** including dynamic OpenGraph tags

---

## Page Descriptions

### Home Page

- Featured post section
- Recent posts grid
- Call-to-action banner
- Stats: most viewed, most liked, and most active author
- Global header (logo, nav, search, theme toggle, user menu)
- Footer with links, small navigation, and copyright

### Post Page

- Full post view with title, image, content, and metadata
- Author info and reading time
- Tags and category
- Like button + social sharing options

### Author Page

- Public author profile
- Avatar, bio, join date, social links, and basic info
- Paginated list of posts with filters

### Dashboard

Accessible only to signed-in users.

- **Profile Settings**: avatar, display name, username, about, DOB, social links, country, gender
- **Add Post** with full editor
- **My Posts**: edit/delete
- **Liked Posts**
- **User Stats**

> Dashboard pages are `noindex` for search engines.

### Additional Pages

- Category pages (same layout as "All Posts" with filters pre-applied)
- Trending Posts (recent posts sorted by popularity)
- List of all authors with filters and pagination
- 404, About, Contact
- Legal pages: Terms of Use, Privacy Policy

---

## Technical Details

- **Framework**: Next.js (App Router, TypeScript)
- **Auth**: Clerk
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Editor**: Quill
- **Styling**: Tailwind CSS + ShadCN
- **State & Data**: React Query with custom hooks
- **Meta / SEO**: static + dynamic metadata
- **Image Uploads**: Stored in Supabase Storage
- **Deployment**: Vercel

---

## Live Version

[https://next-blogs-2025.vercel.app/](https://next-blogs-2025.vercel.app/)
