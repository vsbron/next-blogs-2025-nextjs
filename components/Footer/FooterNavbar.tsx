import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

import FooterNavColumn from "./FooterNavColumn";
import { Button } from "@/components/ui/button";

import { personalAreaLinks, primaryLinks, secondaryLinks } from "@/utils/links";

function FooterNavbar() {
  // Returned JSX
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
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
            <div className="flex sm:flex-col gap-2">
              <SignInButton mode="modal">
                <Button>Log In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="outline">Sign Up</Button>
              </SignUpButton>
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
