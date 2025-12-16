"use client";
import { useRouter } from "next/navigation";
import {
  FormEvent,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import SearchPostPreview from "@/components/Header/SearchPostPreview";
import { Button } from "@/components/ui/button";
import useSearchPreview from "@/hooks/useSearchPreview";
import { SearchIcon, XIcon } from "lucide-react";

function Search() {
  // Create state variable for search term, error, searching state, results, loading state, referrer for input field and router
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Toggle search field functions
  const showSearch = () => {
    setIsSearching(true);
  };
  const hideSearch = useCallback(() => {
    setIsSearching(false);
    setSearchTerm("");
    setError("");
  }, []);

  // useEffect function with key events
  useEffect(() => {
    const toggleSearch = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        hideSearch();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        showSearch();
      }
    };

    // Add event listener
    document.addEventListener("keydown", toggleSearch);

    // Clear function
    return () => document.removeEventListener("keydown", toggleSearch);
  }, [hideSearch]);

  // useEffect function that puts focus on the input
  useEffect(() => {
    if (isSearching) inputRef.current?.focus();
  }, [isSearching]);

  // Submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Prevent default behavior
    e.preventDefault();

    // Guard clause
    if (!searchTerm.trim()) return setError("Please fill the search field");

    // Close search and redirect user to search page
    hideSearch();
    router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  // Click Handlers on the article and See all option
  const handleLinkClick = (id: number) => {
    startTransition(() => {
      router.push(`/posts/${id}`);
      hideSearch();
    });
  };
  const handleSeeAll = () => {
    startTransition(() => {
      router.push(`/search?query=${searchTerm}`);
      hideSearch();
    });
  };

  // Get the search results preview
  const { results, loading } = useSearchPreview({ searchTerm, setError });

  // Returned JSX
  return (
    <>
      <Button
        type="submit"
        variant="outline"
        size="sm"
        className="p-1.5"
        aria-label="Search posts"
        onClick={showSearch}
      >
        <SearchIcon />
      </Button>

      <div
        className={`fixed inset-0 bg-black/90 transition-opacity z-150 ${
          isSearching ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={hideSearch}
      >
        <XIcon
          stroke="white"
          className="fixed top-3 right-5 w-8 h-8 z-50 cursor-pointer"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`fixed top-15 sm:top-20 left-0 right-0 mx-auto z-150 w-80 xs:w-96 transition-all duration-300 ease-out transform ${
          isSearching
            ? "opacity-100 translate-y-0 pointer-events-auto delay-150"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <input
          type="search"
          name="search"
          className="border rounded-3xl border-white/50 py-4 pl-3 pr-11 sm:pt-6 sm:pb-7 sm:pl-5 sm:pr-13 bg-transparent text-white h-8 sm:h-10 w-full text-lg sm:text-2xl outline-0 shadow-primary/60 shadow-[0_0_70px_5px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          disabled={!isSearching}
          ref={inputRef}
        />
        <Button
          type="submit"
          variant="link"
          className="absolute right-0 -top-0.5 sm:top-2"
          disabled={!isSearching}
          aria-label="Search post"
        >
          <SearchIcon className="!w-5 !h-5 !sm:w-8 !sm:h-8 stroke-white" />
        </Button>
        <div className="mt-3 sm:mt-4 text-white">
          {/* Messages, alerts and loaders */}
          {error && <div className="text-sm">{error}</div>}
          {!error && searchTerm.trim().length < 3 && (
            <div className="text-sm">
              Type at least 3 characters to start searching
            </div>
          )}
          {!error && searchTerm.trim().length >= 3 && loading && (
            <div className="loader"></div>
          )}

          {/* Previews */}
          {!error &&
            searchTerm.trim().length >= 3 &&
            !loading &&
            results.length > 0 && (
              <>
                <h2 className="text-md sm:text-lg text-white mb-2">
                  Quick results:
                </h2>
                <div className="flex flex-col gap-4 sm:gap-8">
                  {results.map((post) => (
                    <>
                      <div
                        key={post.id}
                        onClick={() => handleLinkClick(post.id)}
                        className="cursor-pointer"
                      >
                        <SearchPostPreview post={post} />
                      </div>
                      <div className="bg-white h-0.25 opacity-50 mb-1" />
                    </>
                  ))}
                  <div
                    className="font-bold text-center self-center cursor-pointer"
                    onClick={handleSeeAll}
                  >
                    See all results
                  </div>
                </div>
              </>
            )}
          {!error &&
            searchTerm.trim().length >= 3 &&
            !loading &&
            results.length === 0 && (
              <div className="text-sm">No posts found matching your query.</div>
            )}
        </div>
      </form>
    </>
  );
}

export default Search;
