"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Search() {
  // Create state variable for search term, error, searching state, referrer for input field and router
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Toggle search field functions
  const showSearch = () => {
    setIsSearching(true);
  };
  const hideSearch = () => {
    setIsSearching(false);
    setSearchTerm("");
    setError("");
  };

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
  }, []);

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
        className={`fixed top-20 left-0 right-0 mx-auto z-150 w-80 xs:w-96 transition-all duration-300 ease-out transform ${
          isSearching
            ? "opacity-100 translate-y-0 pointer-events-auto delay-150"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <input
          type="search"
          name="search"
          className="border rounded-3xl border-white/50 pt-6 pb-7 pl-5 pr-13 bg-transparent text-white h-10 w-full text-2xl outline-0 shadow-primary/60 shadow-[0_0_70px_5px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          disabled={!isSearching}
          ref={inputRef}
        />
        <Button
          type="submit"
          variant="link"
          className="absolute right-0 top-2"
          disabled={!isSearching}
          aria-label="Search post"
        >
          <SearchIcon className="!w-8 !h-8 stroke-white" />
        </Button>
        <div className="text-white text-sm text-center mt-3">{error}</div>
      </form>
    </>
  );
}

export default Search;
