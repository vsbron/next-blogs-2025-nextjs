import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { ARTICLES_PER_PAGE } from "@/utils/constants";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Props type
type PaginationLineProps = {
  count: number;
};

// The component
function PaginationLine({ count }: PaginationLineProps) {
  // Getting the state from URL using hook and get the page
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page");

  const params = new URLSearchParams(searchParams.toString());

  // Getting the current page number
  const currentPage = !page ? 1 : Number(page);

  // Getting the max amount of pages
  const pageCount = Math.ceil(count / ARTICLES_PER_PAGE);

  // Click handlers from the pagination buttons
  function nextPage() {
    // Calculating the next page
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    // Setting the new state in URL
    params.set("page", String(next));
    router.push(`?${params.toString()}`);
  }

  function prevPage() {
    // Calculating the prev page
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    // Setting the new state in URL
    params.set("page", String(prev));
    router.push(`?${params.toString()}`);
  }

  // Returned JSX
  return (
    <Pagination className="flex justify-end mt-7">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">
            <ChevronFirst />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={prevPage}>
          <ChevronLeft />
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">7</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem onClick={nextPage}>
          <ChevronRight />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            <ChevronLast />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationLine;
