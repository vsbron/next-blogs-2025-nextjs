"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Props type
type PaginationLineProps = {
  page: number;
  pageCount: number;
};

// The component
function PaginationLine({ page, pageCount }: PaginationLineProps) {
  // Get the router, search params, and params object
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  // Get the pages number, and generate pagination for current pages
  const pages = getPagesToShow(page, pageCount);

  // Switch page handler
  const goToPage = (page: number) => {
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
  };

  // Returned JSX
  return (
    <div className="flex justify-center md:justify-end gap-1 md:gap-2 mt-6">
      {/* First and Prev buttons */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => goToPage(1)}
        disabled={page === 1}
      >
        <ChevronFirst />
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft />
      </Button>

      {/* Left ellipsis */}
      {pages[0] > 1 && <span className="px-2 mt-2">...</span>}

      {/* Middle pages */}
      {pages.map((p) => (
        <Button
          size="sm"
          key={p}
          onClick={() => goToPage(p)}
          variant={p === page ? "default" : "outline"}
        >
          {p}
        </Button>
      ))}

      {/* Right ellipsis */}
      {pages[pages.length - 1] < pageCount && (
        <span className="px-2 mt-2">...</span>
      )}

      {/* Next and Last buttons */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => goToPage(page + 1)}
        disabled={page === pageCount}
      >
        <ChevronRight />
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => goToPage(pageCount)}
        disabled={page === pageCount}
      >
        <ChevronLast />
      </Button>
    </div>
  );
}

// Helper function to fill the current pages on pagination
function getPagesToShow(currentPage: number, pageCount: number) {
  const pages: number[] = [];

  // Get the first and last pages that should be visible
  const pagesToShow = window.innerWidth < 640 ? 1 : 2;
  const start = Math.max(currentPage - pagesToShow, 1);
  const end = Math.min(currentPage + pagesToShow, pageCount);

  // Fill the pages array
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Return pages
  return pages;
}

export default PaginationLine;
