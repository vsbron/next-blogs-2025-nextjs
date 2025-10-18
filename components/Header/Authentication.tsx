"use client";
import { useClerk } from "@clerk/nextjs";

import { DropdownMenuItem } from "../ui/dropdown-menu";

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
        <div className="link-primary" onClick={triggerSignInPopUp}>
          Log in
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="focus:bg-transparent">
        <div className="link-primary" onClick={triggerSignUpPopUp}>
          Sign Up
        </div>
      </DropdownMenuItem>
    </>
  );
}

export default Authentication;
