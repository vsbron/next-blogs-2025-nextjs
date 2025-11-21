"use server";
import { cache } from "react";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import db from "../db";
import { ARTICLES_PER_PAGE } from "../constants";

// Template for Post fields to select in the database
const postFields = {
  id: true,
  title: true,
  preview: true,
  imageUrl: true,
  published: true,
  views: true,
  category: true,
  likes: { select: { id: true } },
};

/* GLOBAL POSTS */
export const fetchPost = cache(async (postId: string) => {
  // Fetch the post using its ID
  const post = await db.post.findUnique({
    where: { id: Number(postId) },
    include: {
      author: { select: { displayName: true, username: true, imageUrl: true } },
      likes: { select: { id: true, userId: true, postId: true } },
    },
  });

  // Return post
  return post;
});

// Server action function that fetches all posts with filters
export const fetchAllPosts = async (
  filters: Record<string, string>,
  page: number
) => {
  // Skip pages
  const skip = (page - 1) * ARTICLES_PER_PAGE;

  // Get the category
  const where: Record<string, string> = {};
  if (filters.category) where.category = filters.category;

  // Get the order
  let orderBy: Prisma.PostOrderByWithRelationInput = { published: "desc" };
  if (filters.sort) {
    switch (filters.sort) {
      case "date_asc":
        orderBy = { published: "asc" };
        break;
      case "likes_desc":
        orderBy = { likes: { _count: "desc" } };
        break;
      case "likes_asc":
        orderBy = { likes: { _count: "asc" } };
        break;
      case "views_desc":
        orderBy = { views: "desc" };
        break;
      case "views_asc":
        orderBy = { views: "asc" };
        break;
      case "title_asc":
        orderBy = { title: "asc" };
        break;
      case "title_desc":
        orderBy = { title: "desc" };
        break;
      case "date_desc":
      default:
        orderBy = { published: "desc" };
    }
  }

  // Fetch data
  const posts = await db.post.findMany({
    where,
    orderBy,
    select: postFields,
    skip,
    take: ARTICLES_PER_PAGE,
  });

  // Total posts count
  const total = await db.post.count({ where });

  // Return posts
  return { posts, total };
};

// Server action function that fetches recent posts with author info and likes
export const fetchRecentPosts = async (amount: number = 12) => {
  const posts = await db.post.findMany({
    take: amount,
    orderBy: { published: "desc" },
    select: postFields,
  });

  // Return recent posts
  return posts;
};

// Server action function that fetches recent posts with author info and likes
export const fetchFeaturedPosts = async () => {
  const posts = await db.post.findMany({
    take: 8,
    orderBy: { likes: { _count: "desc" } },
    select: postFields,
  });

  // Return recent posts
  return posts;
};

/* USER-RELATED POSTS */
// Server action that fetched user's posts
export const fetchUserPosts = async (userId?: string) => {
  // If no userId provided, get it from auth()
  if (!userId) {
    const { userId: authUserId } = await auth();
    if (!authUserId) redirect("/");
    userId = authUserId;
  }

  // Search all user's liked posts
  const posts = await db.post.findMany({
    where: { authorId: userId },
    orderBy: { published: "desc" },
    select: postFields,
  });

  // Return fetched posts
  return posts;
};

// Server action function that fetches user's liked posts
export const fetchUserLikedPosts = async () => {
  // Get the current user clerkId
  const { userId } = await auth();
  if (!userId) redirect("/");

  // Search all user's likes
  const likes = await db.like.findMany({
    where: { userId },
    orderBy: { likedTime: "desc" },
    select: { post: { select: postFields } },
  });

  // Take the posts from likes
  const posts = likes.map((like) => like.post);

  // Return liked posts
  return posts;
};

/* GENERAL STATS */
// Server action function that fetches general stats data
export const fetchGeneralStats = async () => {
  const [likedPosts, viewedPosts, mostPosts] = await Promise.all([
    db.post.findMany({
      take: 10,
      orderBy: { likes: { _count: "desc" } },
      select: { id: true, title: true, _count: { select: { likes: true } } },
    }),
    db.post.findMany({
      take: 10,
      orderBy: { views: "desc" },
      select: { id: true, title: true, views: true },
    }),
    db.user.findMany({
      take: 10,
      orderBy: { posts: { _count: "desc" } },
      select: {
        username: true,
        displayName: true,
        _count: { select: { posts: true } },
      },
    }),
  ]);

  return { likedPosts, viewedPosts, mostPosts };
};
