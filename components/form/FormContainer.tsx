"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { type actionFunction } from "@/utils/types";

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
  const [state, formAction] = useFormState(action, initialState);

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
