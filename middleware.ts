import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Declaring the public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/posts(.*)",
  "/author",
  "/about",
  "/contact",
  "/site-map",
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect all pages from non authorized users
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
