# NextBlogs

NextBlogs is a modern, multi-user blogging platform built with **Next.js**, **Clerk**, **Prisma**, and **Supabase**.  
It provides a clean, responsive environment for writing, exploring, and reading blogs — with full authentication, user profiles, and post management.

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

---

## Project Overview

NextBlogs allows users to browse, read, and publish blog posts while managing their personal profiles and activity data.  
The app focuses on a smooth UI, consistent design, and modern architecture.

**Core principles:**

- Clean and minimal design
- Modular components
- Secure authentication and database integration
- Clear separation between public and private (dashboard) routes

---

## Features

- 🧭 **Home Page** with featured and recent posts
- 🧑‍💻 **User Authentication** powered by **Clerk**
- 🗂️ **Dashboard** for managing profile, posts, and stats
- ✍️ **Distraction-free Editor** for creating and editing posts
- 💾 **Data Storage** handled by **Supabase (Postgres)** via **Prisma ORM**
- 🧩 **Reusable UI Components** (ShadCN, Tailwind CSS)
- 🌙 **Light/Dark Theme Toggle**
- 🔍 **Search Bar** for finding posts
- 💬 **Future plans**: Likes, comments, and favorite categories

---

## Page Descriptions

### **Home Page**

- Hero featured post
- Secondary posts
- Grid of recent posts
- CTA inviting users to write a post
- Sections for popular authors, most-viewed and top-liked post

### **Post Page**

- Full post view with author info, date, and reading time
- Tag display and meta details

### **Author Page**

- Public author profile: avatar, bio, join date, social links
- List of author's posts

### **Dashboard**

Private area accessible only to logged-in users.

- **Manage Profile**: View and edit user details (avatar, display name, bio, etc.)
- **Add Post**: Minimal editor for creating new posts
- **My Posts**: All user's posts with edit/delete options
- **Stats**: Engagement overview (planned)

> Dashboard routes are non-indexed (`robots: noindex, nofollow`).

---

## **Additional Pages**

- About, Contact, 404
- Terms of Use and Privacy Policy
- Footer includes navigation + legal info

---

## Technical Details

- **Framework**: Next.js (App Router, TypeScript)
- **Auth**: Clerk (sign-in, sign-up, protected routes)
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma (models for users, posts, likes, comments)
- **Styling**: Tailwind CSS + ShadCN UI
- **State & Data**: React Query for fetching and caching
- **Themes**: NextThemes for dark/light mode
- **Deployment**: Vercel

---

## Live Version

https://next-blogs-2025.vercel.app/
