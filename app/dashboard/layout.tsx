import { Metadata } from "next";

import Navigation from "@/components/dashboard/Navigation";

// Metadata for all dashboard pages
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// The layout
function layout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div className="flex flex-col sm:flex-row gap-x-8 gap-y-6 w-full">
      <Navigation />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default layout;
