import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

function Search() {
  // Returned JSX
  return (
    <form className="flex items-center relative">
      <input
        type="search"
        name="search"
        className="border rounded-sm border-foreground/50"
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
