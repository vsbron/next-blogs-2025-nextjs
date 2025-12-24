import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

type AuthorizationProps = {
  className?: string;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
};

function Authorization({ className, size = "default" }: AuthorizationProps) {
  // Returned JSX
  return (
    <>
      <SignInButton mode="modal">
        <Button size={size} className={className}>
          Log In
        </Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button variant="outline" size={size} className={className}>
          Sign Up
        </Button>
      </SignUpButton>
    </>
  );
}

export default Authorization;
