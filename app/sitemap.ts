import { MetadataRoute } from "next";

import { POST_CATEGORIES, SITE_DOMAIN } from "@/utils/constants";
import db from "@/utils/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic data
  const posts = await db.post.findMany({
    select: { id: true, updated: true },
  });
  const authors = await db.user.findMany({
    select: { username: true },
  });

  return [
    // Static pages
    { url: `${SITE_DOMAIN}/`, priority: 1 },
    { url: `${SITE_DOMAIN}/posts` },
    { url: `${SITE_DOMAIN}/hot-posts` },
    { url: `${SITE_DOMAIN}/authors` },
    { url: `${SITE_DOMAIN}/about` },
    { url: `${SITE_DOMAIN}/terms` },
    { url: `${SITE_DOMAIN}/privacy` },

    // Posts
    ...posts.map((p) => ({
      url: `${SITE_DOMAIN}/posts/${p.id}`,
      lastModified: p.updated,
      priority: 0.8,
    })),

    // Authors
    ...authors.map((a) => ({
      url: `${SITE_DOMAIN}/authors/${a.username}`,
      priority: 0.6,
    })),

    // Categories
    ...POST_CATEGORIES.map((c) => ({
      url: `${SITE_DOMAIN}/posts?category=${encodeURIComponent(c)}`,
      priority: 0.6,
    })),
  ];
}
