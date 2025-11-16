"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

import EditEmail from "@/components/dashboard/EditEmail";
import EditPassword from "@/components/dashboard/EditPassword";
import EditAvatar from "@/components/dashboard/EditAvatar";
import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionSeparator from "../SectionSeparator";

// The component
function EditCredentials() {
  // Get current user data
  const { user } = useUser();

  // Returned JSX
  return (
    <section>
      <Card className="max-w-[450px]">
        <CardContent>
          <EditEmail user={user} />
          <SectionSeparator />
          <EditPassword user={user} />
          <SectionSeparator />
          <EditAvatar user={user} />
          <ButtonsContainer>
            <Button variant="outline" asChild>
              <Link href="/dashboard/profile/">Go Back</Link>
            </Button>
          </ButtonsContainer>
        </CardContent>
      </Card>
    </section>
  );
}

export default EditCredentials;
