"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import SectionTitle from "@/components/SectionTitle";

function NotFoundSection() {
  // Get the router
  const router = useRouter();

  // Returned JSX
  return (
    <section>
      <ArticleLayout>
        <SectionTitle>Page not found</SectionTitle>
        <p>
          Seems like this page took a wrong turn somewhere in the digital
          wilderness. Maybe the link you followed is out of date, or the story
          was removed from our archives. But hey, every great adventure has a
          few dead ends - that&apos;s how you find the hidden gems.
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
  );
}

export default NotFoundSection;
