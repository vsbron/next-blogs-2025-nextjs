"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import CTASection from "@/components/CTASection";
import IndexStats from "@/components/PostStats";
import SectionTitle from "@/components/SectionTitle";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // Get the router
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <section>
        <ArticleLayout>
          <SectionTitle>Error</SectionTitle>
          <p>
            Oops, something went wrong on our end. Looks like the system hit a
            snag while trying to load this page. Don&apos;t worry - we&apos;re
            already looking into it. Try refreshing the page, or come back in a
            bit once things are running smoothly again.
          </p>
          <p>
            You can try going{" "}
            <span className="link-primary" onClick={() => router.back()}>
              back
            </span>{" "}
            to where you came from, or head to the{" "}
            <Link href="/" className="link-primary">
              homepage
            </Link>{" "}
            to explore fresh stories, trending posts, and creative voices from
            across the community.
          </p>
        </ArticleLayout>
      </section>
      <CTASection />
      <IndexStats />
    </>
  );
}
