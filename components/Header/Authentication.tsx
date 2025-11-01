import { SignInButton, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

function Authentication() {
  // Returned JSX
  return (
    <div className="flex flex-col">
      <DropdownMenuItem className="focus:bg-transparent">
        <SignInButton mode="modal">
          <Button size="sm">Log In</Button>
        </SignInButton>
      </DropdownMenuItem>
      <DropdownMenuItem className="focus:bg-transparent -mt-1 sm:mt-0">
        <SignUpButton mode="modal">
          <Button variant="outline" size="sm">
            Sign Up
          </Button>
        </SignUpButton>
      </DropdownMenuItem>
    </div>
  );
}

export default Authentication;
