import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

function Search() {
  // Returned JSX
  return (
    <form className="items-center relative hidden lg:flex">
      <input
        type="search"
        name="search"
        className="border rounded-sm border-foreground/50 px-2"
        placeholder="Search posts..."
      />
      <Button
        type="submit"
        variant="link"
        size="icon"
        className="absolute right-0 w-auto h-auto p-1.5"
      >
        <SearchIcon />
      </Button>
    </form>
  );
}

export default Search;
