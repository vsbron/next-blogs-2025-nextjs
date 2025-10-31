"use server";
import db from "../db";
import { fetchCurrentUserId } from "./actionHelpers";

// Server action function that fetches recent posts with author info and likes
export const fetchRecentPosts = async () => {
  const posts = await db.post.findMany({
    take: 9,
    orderBy: { published: "desc" },
    select: {
      id: true,
      title: true,
      preview: true,
      imageUrl: true,
      published: true,
      author: {
        select: {
          id: true,
          username: true,
          imageUrl: true,
        },
      },
      _count: { select: { likes: true } },
    },
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

// Server action function that fetches user's liked posts
export const fetchUserLikedPosts = async () => {
  // Get the current user Id
  const userId = await fetchCurrentUserId();

  // Search all user's liked posts
  const posts = await db.post.findMany({
    where: { likes: { some: { userId } } },
    select: {
      id: true,
      title: true,
      preview: true,
      imageUrl: true,
      published: true,
      author: true,
    },
  });

  return posts;
};
