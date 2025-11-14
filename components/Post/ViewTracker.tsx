"use client";
import { useEffect } from "react";
import { incrementPostView } from "@/utils/actions/post";

export default function ViewTracker({ id }: { id: number }) {
  // Increase views count
  useEffect(() => {
    incrementPostView(id);
  }, [id]);

  // Return no JSX
  return null;
}
