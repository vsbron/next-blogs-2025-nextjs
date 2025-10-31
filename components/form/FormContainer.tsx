"use client";
import { useEffect, useActionState } from "react";

import { toast } from "sonner";
import { type actionFunction } from "@/utils/types";
import { cn } from "@/lib/utils";

// Set the Initial state
const initialState = {
  message: "",
};

// Props type
type FormContainerProps = {
  action: actionFunction;
  children: React.ReactNode;
  className?: string;
};

// The component
function FormContainer({ action, children, className }: FormContainerProps) {
  // Get the form state and action
  const [state, formAction] = useActionState(action, initialState);

  // use effect function that displays the toast when state changes
  useEffect(() => {
    if (state.message) {
      toast("", { description: state.message });
    }
  }, [state]);

  // Returned JSX
  return (
    <form action={formAction} className={cn("max-w-96", className)}>
      {children}
    </form>
  );
}

export default FormContainer;
