# NextBlogs

NextBlogs is a multi-user blogging platform built with modern technologies, providing a clean and interactive environment for writing, exploring, and reading blogs.

It features a home page with featured posts, a post feed, user profiles, and an easy-to-use editor for creating content. Authentication is handled with Clerk, ensuring secure sign-up and login.

---

## Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Page Descriptions](#page-descriptions)
   - [Home Page](#home-page)
   - [Post Page](#post-page)
   - [Author Page](#author-page)
   - [Profile Page](#profile-page)
   - [Dashboard Pages](#dashboard-pages)
   - [Additional Pages](#additional-pages)
4. [Technical Details](#technical-details)

---

## Project Overview

NextBlog allows users to browse, read, and create blog posts while managing their own profiles. Key aspects include:

- **Core Layout**: Full-width header and footer, main content in a centered container.
- **Dynamic Content**: Posts with titles, text, tags, and engagement metrics.
- **User Authentication**: Secure sign-up and login with Clerk.
- **Modern UI/UX**: Responsive layout, clean design, and intuitive navigation.

---

## Features

- **Home Page**: Displays a featured post, secondary posts, and a feed of recent posts.
- **Profile and Author Pages**: Show user information, avatar, posts, and stats.
- **Post Management**: Users can write posts with a distraction-free editor.
- **UI Components**: Reusable components for header, footer, cards, and sections.
- **Theme Support**: Dark and light modes with a theme toggle.
- **Search Bar**: Quick access to find posts.

---

## Page Descriptions

### **Home Page**

- Featured post at the top.
- Three secondary posts below the featured post.
- Grid of recent posts.
- Columns showcasing popular authors, most liked posts, and popular tags.
- CTA section encouraging users to write a post.
- Footer with navigation links and legal info.

### **Post Page**

- Displays post content with title, text, tags, and author info.
- Meta details include date, reading time, and engagement.
- Comments section for interaction.

### **Author Page**

- Shows author profile info: avatar, name, bio, social links, date joined.
- Displays the author’s posts in a card layout.

### **Profile Page**

- Displays logged-in user’s info.
- Options to edit profile, change avatar, view posts, and see statistics.

### **Dashboard Pages**

- **Add Post**: Minimal, distraction-free editor for creating posts.
- **All Posts**: Overview of all posts by the user, with options to edit or delete.
- **Stats**: Placeholder for post and engagement statistics (planned).

### **Additional Pages**

- About, Contact, 404 Page, Terms of use, Privacy Policy
- Legal info displayed in the footer.

---

## Technical Details

- **Framework**: Next.js with TypeScript.
- **Routing**: App Router for page navigation.
- **Authentication**: Clerk for user sign-up, login, and protected routes.
- **Styling**: Tailwind CSS with ShadCN components and custom color palette.
- **State Management**: Local component state and remote state handling where needed.
- **Theming**: Light and dark mode toggle using NextThemes.
- **Data Handling**: Prisma prepared for the database models (users, posts, tags, likes, comments).

## Live version

https://next-blogs-2025.vercel.app/
