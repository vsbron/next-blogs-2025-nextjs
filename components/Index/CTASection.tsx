"use client";
import Link from "next/link";
import { PencilLine } from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

import LogoIcon from "@/assets/icon.svg";
import Image from "next/image";

function CTASection() {
  // Get the Clerk object
  const clerk = useClerk();

  // Authentication pop up triggers
  const triggerSignInPopUp = () => {
    clerk.openSignIn({});
  };
  const triggerSignUpPopUp = () => {
    clerk.openSignUp({});
  };

  // Returned JSX
  return (
    <section className="md:my-8">
      <SectionTitle as="h1">
        Read, Create and Share your stories on{" "}
        <span className="text-primary font-semibold">nextblogs</span>
      </SectionTitle>
      <div className="relative">
        <div className="max-w-2xl">
          <p className="text-xl sm:text-2xl">
            Join our community of writers and readers. Discover trending posts,
            follow your favorite authors, and share your own stories with the
            world.
          </p>
          <div className="border-b border-border/50 w-full mt-5 mb-4"></div>
          <SignedIn>
            <p className="text-lg sm:text-xl mb-4">
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
            <p className="text-lg sm:text-xl mb-4">
              Sign up or log in to start sharing your stories today!
            </p>
            <div className="flex gap-2">
              <Button
                size="lg"
                className="text-lg"
                onClick={triggerSignInPopUp}
              >
                Log in
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={triggerSignUpPopUp}
              >
                Sign Up
              </Button>
            </div>
          </SignedOut>
        </div>
        <div className="absolute -bottom-4 sm:top-2/5 sm:bottom-auto right-5 sm:right-8 w-24 h-24 sm:w-80 sm:h-80 md:w-96 md:h-96 -rotate-20 sm:-translate-y-1/2 -z-1">
          <Image
            src={LogoIcon}
            fill
            alt="nextblogs"
            className="object-cover opacity-20 sm:opacity-15 md:opacity-20"
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
