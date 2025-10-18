"use client";
import { useClerk } from "@clerk/nextjs";

function Authentication() {
  // Get the Clerk object
  const clerk = useClerk();
  3;

  // Returned JSX
  return (
    <div className="flex flex-col gap-2 items-end">
      <div
        className="cursor-pointer text-primary hover:text-primary-light"
        onClick={() => {
          clerk.openSignIn({});
        }}
      >
        Log in
      </div>
      <div
        className="cursor-pointer text-primary hover:text-primary-light"
        onClick={() => {
          clerk.openSignUp({});
        }}
      >
        Sign Up
      </div>
    </div>
  );
}

export default Authentication;
