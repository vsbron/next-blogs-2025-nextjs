"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Types for action type
type ActionType = "edit" | "delete";
type ActiveAction = {
  contentId: number;
  type: ActionType;
} | null;

// Types for context
type ActionModalContextType = {
  activeAction: ActiveAction;
  openAction: (contentId: number, type: ActionType) => void;
  closeAction: () => void;
};

// Create context
const ActionModalContext = createContext<ActionModalContextType | undefined>(
  undefined
);

// Create custom hook for easier access
export function useActionModal() {
  // Get the context
  const context = useContext(ActionModalContext);

  // Guard clause
  if (!context)
    throw new Error("useActionModal must be used within ActionModal");

  // Return context
  return context;
}

// Provider component
function ActionModal({ children }: { children: ReactNode }) {
  // Set state value for active action
  const [activeAction, setActiveAction] = useState<ActiveAction>(null);

  // Set the open and close functions
  const openAction = (contentId: number, type: ActionType) => {
    setActiveAction({ contentId, type });
  };
  const closeAction = () => setActiveAction(null);

  // Return the provider
  return (
    <ActionModalContext.Provider
      value={{ activeAction, openAction, closeAction }}
    >
      {children}
    </ActionModalContext.Provider>
  );
}

// Props type for Trigger child component
type TriggerProps = {
  contentId: number;
  type: ActionType;
  children: ReactNode;
};

// Trigger child component
ActionModal.Trigger = function Trigger({
  contentId,
  type,
  children,
}: TriggerProps) {
  const { activeAction, openAction, closeAction } = useActionModal();
  const isOpen =
    activeAction?.contentId === contentId && activeAction?.type === type;

  return (
    <div
      onClick={() => (isOpen ? closeAction() : openAction(contentId, type))}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

// Props type for Panel child component
type PanelProps = { contentId: number; type: ActionType; children: ReactNode };

// Panel child component
ActionModal.Panel = function Panel({ contentId, type, children }: PanelProps) {
  const { activeAction } = useActionModal();
  const isOpen =
    activeAction?.contentId === contentId && activeAction?.type === type;
  if (!isOpen) return null;

  return <div className="absolute z-50">{children}</div>;
};

export default ActionModal;
