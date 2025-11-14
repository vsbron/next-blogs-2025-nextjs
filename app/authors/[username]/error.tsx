"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import CTASection from "@/components/CTASection";
import IndexStats from "@/components/IndexStats";
import SectionTitle from "@/components/SectionTitle";

// Props type
type ErrorPageProps = {
  error: Error & { digest?: string };
};

// The page
export default function ErrorPage({ error }: ErrorPageProps) {
  // Get the router
  const router = useRouter();

  // Log the error
  useEffect(() => {
    console.error(error);
  }, [error]);

  // Returned JSX
  return (
    <>
      <section>
        <SectionTitle>{error.message}</SectionTitle>
        <ArticleLayout>
          <p>
            Sorry, we could not find the user you were looking for.
            <br />
            It may have been deleted, or the link might be incorrect, or
            something else happened. Please check the URL or try again.
          </p>
          <p>
            You can try going{" "}
            <span className="link-primary" onClick={() => router.back()}>
              back
            </span>{" "}
            to where you came from, or head to the{" "}
            <Link href="/">homepage</Link> to explore fresh stories, trending
            posts, and creative voices from across the community.
          </p>
        </ArticleLayout>
      </section>
      <CTASection />
      <IndexStats />
    </>
  );
}
