"use client";
import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";

import { Button } from "../ui/button";

function Search() {
  // Create state variable for searching
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Toggle functions
  const showSearch = () => {
    setIsSearching(true);
  };
  const hideSearch = () => {
    setIsSearching(false);
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

  // Returned JSX
  return (
    <>
      <Button
        type="submit"
        variant="outline"
        size="sm"
        className="p-1.5"
        onClick={showSearch}
      >
        <SearchIcon />
      </Button>
      {isSearching && (
        <>
          <div className="fixed inset-0 bg-black/85" onClick={hideSearch} />
          <form className="fixed top-15 left-0 right-0 mx-auto z-50 w-96">
            <input
              type="search"
              name="search"
              className="border rounded-3xl border-foreground/50 pt-5 pb-6 pl-4 pr-13 bg-background h-10 w-full text-2xl outline-0"
              placeholder="Search posts..."
            />
            <Button
              type="submit"
              variant="link"
              className="absolute right-0 top-1"
            >
              <SearchIcon className="!w-9 !h-9" />
            </Button>
          </form>
        </>
      )}
    </>
  );
}

export default Search;
