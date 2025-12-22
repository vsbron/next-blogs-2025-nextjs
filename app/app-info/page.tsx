import { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "App Info",
  description:
    "Learn more about NextBlogs - the modern multi-user blogging platform built for writers and readers alike.",
};

// The page
function AppInfoPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>App Info</SectionTitle>
      <ArticleLayout>
        <p>
          NextBlogs is a multi-user blogging platform built with{" "}
          <strong>Next.js</strong>, <strong>Clerk</strong>,{" "}
          <strong>Prisma</strong>, and <strong>Supabase</strong>.<br />
          It offers a clean, responsive environment for reading, writing, and
          discovering content, with full authentication, profiles, and post
          management tools.
          <br />
          The platform focuses on clarity, modular design, and a smooth reading
          and writing experience.
        </p>

        <hr />

        <SectionTitle as="h2">Contents</SectionTitle>
        <ol>
          <li>
            <a href="#project-core-principles">Project Core Principles</a>
          </li>
          <li>
            <a href="#ui--ux-features">Features</a>
          </li>
          <li>
            <a href="#page-descriptions">Page Descriptions</a>
            <ul>
              <li>
                <a href="#home-page">Home Page</a>
              </li>
              <li>
                <a href="#post-page">Post Page</a>
              </li>
              <li>
                <a href="#author-page">Author Page</a>
              </li>
              <li>
                <a href="#search-page">Search Page</a>
              </li>
              <li>
                <a href="#dashboard">Dashboard</a>
              </li>
              <li>
                <a href="#additional-pages">Additional Pages</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#technical-details">Technical Details</a>
          </li>
          <li>
            <a href="#live-version">Live Version</a>
          </li>
        </ol>

        <hr />

        <SectionTitle as="h2" id="project-core-principles">
          Project Core principles
        </SectionTitle>
        <ul>
          <li>Simple and clean interface</li>
          <li>Reusable, modular components</li>
          <li>Secure authentication</li>
          <li>Clear separation between public routes and dashboard features</li>
        </ul>

        <hr />

        <h3 id="ui--ux-features">UI / UX Features</h3>
        <ul>
          <li>
            🏠 <strong>Home Page</strong> with featured posts, recent posts,
            stats, and CTA
          </li>
          <li>
            🔥 <strong>Trending Posts</strong> page based on recent activity
          </li>
          <li>
            🗂️ <strong>Full Post Filtering & Pagination</strong> (category,
            popularity, views, date)
          </li>
          <li>
            ❤️ <strong>Like and Share Buttons</strong> for posts with real-time
            updates
          </li>
          <li>
            🧑‍🤝‍🧑 <strong>Author List Page</strong> with filters & pagination
          </li>
          <li>
            🔍 <strong>Global Search Bar</strong> available on any page, with
            live result previews
          </li>
          <li>
            🌙 <strong>Light/Dark Theme Toggle</strong>
          </li>
          <li>
            📱 <strong>Fully Responsive Layout</strong>
          </li>
          <li>
            💬 <strong>Comments System</strong>
            <ul className="!m-0">
              <li>Authorized users can add comments to posts</li>
              <li>Comments are displayed directly on the post page</li>
              <li>
                Users can edit or delete their own comments from the post page
              </li>
              <li>All user comments are also accessible from the dashboard</li>
            </ul>
          </li>
        </ul>

        <h3>Backend / Logic Features</h3>
        <ul>
          <li>
            👤 <strong>User Authentication</strong> via Clerk (accounts stored
            in Prisma/Supabase and linked by <code>clerkId</code>)
          </li>
          <li>
            📊 <strong>Dashboard</strong>: profile settings, user posts, liked
            posts, and basic stats
          </li>
          <li>
            ✏️ <strong>Editable User Profile</strong> (avatar, bio, socials,
            country, gender)
          </li>
          <li>
            ✍️ <strong>Add, Edit, Delete Posts</strong> with a Quill WYSIWYG
            editor
          </li>
          <li>
            🔒 <strong>Secure Data Storage</strong> in Supabase Postgres,
            managed through Prisma
          </li>
          <li>
            🔄 <strong>Server Actions</strong> + <strong>React Query</strong>{" "}
            for fetching dynamic lists
          </li>
          <li>
            📦 <strong>Metadata</strong> including dynamic OpenGraph tags
          </li>
        </ul>

        <hr />

        <SectionTitle as="h2" id="page-descriptions">
          Page Descriptions
        </SectionTitle>

        <h3 id="home-page">Home Page</h3>
        <ul>
          <li>Featured post section</li>
          <li>Recent posts grid</li>
          <li>Call-to-action banner</li>
          <li>Stats: most viewed, most liked, and most active author</li>
          <li>Global header (logo, nav, search, theme toggle, user menu)</li>
          <li>Footer with links, small navigation, and copyright</li>
        </ul>

        <h3 id="post-page">Post Page</h3>
        <ul>
          <li>Full post view with title, image, content, and metadata</li>
          <li>Author info and reading time</li>
          <li>Tags and category</li>
          <li>Like button + social sharing options</li>
        </ul>

        <h3 id="author-page">Author Page</h3>
        <ul>
          <li>Public author profile</li>
          <li>Avatar, bio, join date, social links, and basic info</li>
          <li>Paginated list of posts with filters</li>
        </ul>

        <h3 id="search-page">Search Page</h3>
        <ul>
          <li>Dedicated page for discovering articles</li>
          <li>Search across title, preview text, and author names</li>
          <li>Category-based filtering</li>
          <li>Sorting and additional filters (e.g. popular posts)</li>
          <li>Paginated results with clear empty-state messaging</li>
        </ul>

        <h3 id="dashboard">Dashboard</h3>
        <p>Accessible only to signed-in users.</p>
        <ul>
          <li>
            <strong>Profile Settings</strong>: manage avatar, display name,
            username, bio, date of birth, social links, country, and gender
          </li>
          <li>
            <strong>Add Post</strong>: create new posts with a full editor
          </li>
          <li>
            <strong>My Posts</strong>: view, edit, or delete your posts
          </li>
          <li>
            <strong>Liked Posts</strong>: see posts you have liked
          </li>
        </ul>
        <p>
          Dashboard pages are <code>noindex</code> for search engines.
        </p>

        <h3 id="additional-pages">Additional Pages</h3>
        <ul>
          <li>
            Category pages - Lists all available categories. Selecting one opens
            the All Posts page with the corresponding filters pre-applied
          </li>
          <li>
            Trending Posts - Shows the latest popular posts that meet the
            defined conditions
          </li>
          <li>
            Authors list - Similar to posts, but showcases authors, complete
            with filters and pagination
          </li>
          <li>
            App Info, About Us, Contact Us, Site Map - Technical pages providing
            information about the platform and ways to get in touch
          </li>
          <li>
            Custom error pages - 404 and other error pages for various
            situations
          </li>
          <li>Legal pages - Terms of Use and Privacy Policy</li>
        </ul>

        <hr />

        <SectionTitle as="h2" id="technical-details">
          Technical Details
        </SectionTitle>
        <ul>
          <li>
            <strong>Framework</strong>: Next.js (App Router, TypeScript)
          </li>
          <li>
            <strong>Auth</strong>: Clerk
          </li>
          <li>
            <strong>Database</strong>: Supabase (PostgreSQL)
          </li>
          <li>
            <strong>ORM</strong>: Prisma
          </li>
          <li>
            <strong>Editor</strong>: Quill
          </li>
          <li>
            <strong>Styling</strong>: Tailwind CSS + ShadCN
          </li>
          <li>
            <strong>State & Data</strong>: React Query with custom hooks
          </li>
          <li>
            <strong>Meta / SEO</strong>: static + dynamic metadata
          </li>
          <li>
            <strong>Image Uploads</strong>: Stored in Supabase Storage
          </li>
          <li>
            <strong>EmailJS</strong>: Sending messages from the Contact Us form
          </li>
          <li>
            <strong>Deployment</strong>: Vercel
          </li>
        </ul>
      </ArticleLayout>
    </section>
  );
}

export default AppInfoPage;
