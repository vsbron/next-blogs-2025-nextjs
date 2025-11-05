"use server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import db from "../db";
import { PostPreview } from "../types";

// Template for Post fields to select in the database
const postFields = {
  id: true,
  title: true,
  preview: true,
  imageUrl: true,
  published: true,
  views: true,
  _count: { select: { likes: true } },
};

/* GLOBAL POSTS */
export const fetchPost = async (postId: string) => {
  // Fetch the post using its ID
  const post = await db.post.findUnique({
    where: { id: Number(postId) },
    include: {
      _count: { select: { likes: true } },
      author: { select: { displayName: true, username: true } },
      likes: true,
    },
  });

  // Return post
  return post;
};

// Server action function that fetches recent posts with author info and likes
export const fetchRecentPosts = async () => {
  const posts = await db.post.findMany({
    take: 12,
    orderBy: { published: "desc" },
    select: postFields,
  });

  return posts;
};

// Server action function that fetches most liked posts
export const fetchMostLikedPosts = async () => {
  const posts = await db.post.findMany({
    take: 10,
    orderBy: { likes: { _count: "desc" } },
    select: {
      id: true,
      title: true,
      _count: { select: { likes: true } },
    },
  });

  return posts;
};

// Server action function that fetches most viewed posts
export const fetchMostViewedPosts = async () => {
  const posts = await db.post.findMany({
    take: 10,
    orderBy: { views: "desc" },
    select: {
      id: true,
      title: true,
      views: true,
    },
  });

  return posts;
};

/* USER-RELATED POSTS */
// Server action that fetched user's posts
export const fetchUserPosts = async (userId?: string) => {
  // If no userId provided, get it from auth()
  if (!userId) {
    const { userId: authUserId } = await auth();
    if (!authUserId) return null;
    userId = authUserId;
  }

  // Search all user's liked posts
  const posts = await db.post.findMany({
    where: { authorId: userId },
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

  // Search all user's liked posts
  const posts = await db.post.findMany({
    where: { likes: { some: { userId } } },
    select: postFields,
  });

  return posts;
};

// Server action function that collects user's stats
export async function fetchUserStats(
  userId?: string
): Promise<UserStats | null> {
  // Get current user ID if not provided
  if (!userId) {
    const { userId: authUserId } = await auth();
    if (!authUserId) return null;
    userId = authUserId;
  }

  // Aggregate counts: posts, total views
  const postsAggregate = await db.post.aggregate({
    where: { authorId: userId },
    _count: { id: true },
    _sum: { views: true },
  });

  // Fetch only the top post by views
  const mostViewedPosts = await db.post.findMany({
    where: { authorId: userId },
    take: 3,
    orderBy: { views: "desc" },
    select: postFields,
  });

  // Return total posts, views and most viewed post
  return {
    totalPosts: postsAggregate._count.id,
    totalViews: postsAggregate._sum.views || 0,
    mostViewedPosts,
  };
}

// User's stats action function type
export type UserStats = {
  totalPosts: number;
  totalViews: number;
  mostViewedPosts: PostPreview[];
};
