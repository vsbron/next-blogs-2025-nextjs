"use client";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";

import FooterNavColumn from "./FooterNavColumn";
import { Button } from "@/components/ui/button";

import { personalAreaLinks, primaryLinks, secondaryLinks } from "@/utils/links";

function FooterNavbar() {
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
    <div className="flex gap-24">
      <div>
        <h3 className="font-poppins text-xl mb-2">Menu</h3>
        <div className="flex gap-14">
          <FooterNavColumn links={primaryLinks} />

          <FooterNavColumn links={secondaryLinks} />
        </div>
      </div>
      <div>
        <h3 className="font-poppins text-xl mb-2">Personal Area</h3>
        <div>
          <SignedOut>
            <div className="flex flex-col gap-2">
              <Button variant="default" onClick={triggerSignInPopUp}>
                Log in
              </Button>
              <Button variant="default" onClick={triggerSignUpPopUp}>
                Sign Up
              </Button>
            </div>
          </SignedOut>
          <SignedIn>
            <FooterNavColumn links={personalAreaLinks} />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default FooterNavbar;
