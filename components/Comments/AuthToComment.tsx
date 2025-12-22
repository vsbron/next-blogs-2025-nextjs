import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ButtonsContainer } from "../form/Buttons";

function AuthToComment() {
  // Returned JSX
  return (
    <Card className="gap-0 py-3 sm:py-4 mb-6">
      <CardHeader className="max-sm:px-4 py-0 mb-1">
        <div className="text-lg">You are not authorized</div>
      </CardHeader>
      <CardContent className="py-0 max-sm:px-4">
        <div className="mb-2">
          Sign in or create an account to join the discussion.
        </div>
        <ButtonsContainer className="m-0 flex-row">
          <SignInButton mode="modal">
            <Button size="sm">Log In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="outline" size="sm">
              Sign Up
            </Button>
          </SignUpButton>
        </ButtonsContainer>
      </CardContent>
    </Card>
  );
}

export default AuthToComment;
