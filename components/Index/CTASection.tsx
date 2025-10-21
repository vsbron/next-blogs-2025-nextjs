"use client";
import Link from "next/link";
import Image from "next/image";
import { PencilLine } from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

import CTAImg from "@/assets/ctaImg.png";

function CTASection() {
  // Get the Clerk object
  const clerk = useClerk();

  // Authentication pop up triggers
  const triggerSignIn = () => {
    clerk.openSignIn({});
  };
  const triggerSignUp = () => {
    clerk.openSignUp({});
  };

  // Returned JSX
  return (
    <section className="py-8 xs:py-20 md:py-24 my-12 relative">
      <SectionTitle as="h1" className="pr-10">
        Read, Create and Share your stories on{" "}
        <span className="text-primary font-semibold">nextblogs</span>
      </SectionTitle>
      <div className="max-w-3xl pr-10 xs:pr-36 md:pr-20">
        <p className="text-xl sm:text-2xl">
          Join our community of writers and readers. Discover trending posts,
          follow your favorite authors, and share your own thoughts with the
          world.
        </p>
        <div className="border-b border-border/50 w-full mt-5 mb-4"></div>
        <SignedIn>
          <p className="text-lg sm:text-xl !mb-4 pr-20">
            Create a new post and share your story with the community!
          </p>
          <Button size="lg" asChild>
            <Link href="/profile/add-post">
              <PencilLine />
              <span className="text-lg">Post</span>
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <p className="text-lg sm:text-xl !mb-4">
            Sign up or log in to start sharing your stories today!
          </p>
          <div className="flex gap-2 sm:gap-4">
            <Button size="lg" className="text-lg" onClick={triggerSignIn}>
              Log in
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg"
              onClick={triggerSignUp}
            >
              Sign Up
            </Button>
          </div>
        </SignedOut>
      </div>
      <CTABackground />
    </section>
  );
}

// Helper component
function CTABackground() {
  // Returned JSX
  return (
    <div className="absolute h-full inset-0 left-1/3 overflow-hidden -z-10">
      <Image
        src={CTAImg}
        alt="NextBlogs"
        fill
        className="object-cover sm:rounded-xl"
      />
      <div className="absolute inset-0 right-0 bg-gradient-to-r from-background/100 via-background/100 via-[20%] to-background/70 xs:to-background/0" />
    </div>
  );
}

export default CTASection;
