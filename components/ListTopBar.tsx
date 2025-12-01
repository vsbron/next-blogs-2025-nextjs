import FiltersTrigger from "@/components/FiltersTrigger";
import { ARTICLES_PER_PAGE, USERS_PER_PAGE } from "@/utils/constants";

// Props type
type ListTopBarProps = {
  units: "authors" | "posts";
  countData: { count: number; total: number; page: number };
  showFilters: boolean;
  toggleFilters: () => void;
};

// The component
function ListTopBar({
  units,
  countData,
  showFilters,
  toggleFilters,
}: ListTopBarProps) {
  // Prepare the initial data
  const { count, total, page } = countData;
  const limit = units === "authors" ? USERS_PER_PAGE : ARTICLES_PER_PAGE;

  // Calculate range and set up the label
  const rangeStart = (page - 1) * limit + 1;
  const rangeEnd = Math.min(rangeStart + limit - 1, total);
  const range = `${rangeStart}-${rangeEnd}`;
  const label = count > 0 ? `${range} ${units} of ${total}` : "0";

  // Returned JSX
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-foreground/50 text-sm md:text-md">
        Showing {label} results
      </span>
      <FiltersTrigger closeFn={toggleFilters} isOpen={showFilters} />
    </div>
  );
}

export default ListTopBar;
