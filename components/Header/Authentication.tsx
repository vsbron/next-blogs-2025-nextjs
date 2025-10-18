"use client";
import { useClerk } from "@clerk/nextjs";

import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

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
      <DropdownMenuItem className="focus:bg-transparent">
        <Button variant="outline" size="sm" asChild>
          <div onClick={triggerSignUpPopUp}>Sign Up</div>
        </Button>
      </DropdownMenuItem>
    </>
  );
}

export default Authentication;
