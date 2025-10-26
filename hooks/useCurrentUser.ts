"use client";
import { useClerk } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { getUser } from "@/utils/actions";

// Custom hook that fetches user data and returns it with a bunch of other stuff
function useCurrentUser() {
  // Get user data, signOut function and isSignedIn state from Clerk
  const { user: clerkUser, signOut, isSignedIn } = useClerk();
  const clerkId = clerkUser?.id as string;

  // Fetch the user data based on ClerkId
  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryKey: ["user", clerkId],
    queryFn: () => getUser(clerkId),
    enabled: !!clerkId,
  });

  // Return everything
  return { clerkId, user, isPending, error, signOut, isSignedIn };
}

export default useCurrentUser;
