"use client";
import { useClerk } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { fetchCurrentUser } from "@/utils/actions/users";

// Custom hook that fetches user data and returns it with a bunch of other stuff
function useCurrentUser() {
  // Get user data, signOut function and isSignedIn state from Clerk
  const { user: clerkUser, isSignedIn } = useClerk();
  const clerkId = clerkUser?.id as string;

  // Fetch the user data based on ClerkId
  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryKey: ["user", clerkId],
    queryFn: () => fetchCurrentUser(),
    enabled: !!clerkId,
  });

  // Return everything
  return { user, isPending, error, isSignedIn };
}

export default useCurrentUser;
