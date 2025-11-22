import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import { Filter, FilterX } from "lucide-react";

// Props type
type FilterTriggerProps = {
  closeFn: () => void;
  isOpen: boolean;
};

// The component
function FiltersTrigger({ closeFn, isOpen }: FilterTriggerProps) {
  // Returned JSX
  return (
    <ButtonsContainer className="m-0">
      <Button variant="outline" size="xs" className="ml-auto" onClick={closeFn}>
        {isOpen ? <FilterX /> : <Filter />} Filters
      </Button>
    </ButtonsContainer>
  );
}

export default FiltersTrigger;
