"use client";
import { useClerk } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

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
    <>
      <DropdownMenuItem className="focus:bg-transparent">
        <Button size="sm" asChild>
          <div onClick={triggerSignInPopUp}>Log in</div>
        </Button>
      </DropdownMenuItem>
      <DropdownMenuItem className="focus:bg-transparent -mt-1 sm:mt-0">
        <Button variant="outline" size="sm" asChild>
          <div onClick={triggerSignUpPopUp}>Sign Up</div>
        </Button>
      </DropdownMenuItem>
    </>
  );
}

export default Authentication;
