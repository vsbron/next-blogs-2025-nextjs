"use client";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

function Authentication() {
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
    <div className="flex gap-4">
      <SignedOut>
        <Button variant="outline" size="sm" onClick={triggerSignInPopUp}>
          Log in
        </Button>
        <Button variant="outline" size="sm" onClick={triggerSignUpPopUp}>
          Sign Up
        </Button>
      </SignedOut>
      <SignedIn>
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/profile">Dashboard</Link>
        </Button>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Authentication;
