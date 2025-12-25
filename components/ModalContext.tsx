import { createContext, useContext, useState } from "react";

// Context types
type ActionType = "edit" | "delete";
type ActiveAction = {
  contentId: number;
  type: ActionType;
} | null;
type ModalContextType = {
  isOpen: (contentId: number, type: ActionType) => boolean;
  onOpen: (contentId: number, type: ActionType) => void;
  onClose: () => void;
};

// Create Context with undefined
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ModalProvider component that will wrap the app
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  // Set state value for opened modal
  const [activeAction, setActiveAction] = useState<ActiveAction>(null);

  // Helper functions
  const isOpen = (contentId: number, type: ActionType) =>
    activeAction?.contentId === contentId && activeAction?.type === type;
  const onOpen = (contentId: number, type: ActionType) =>
    setActiveAction({ contentId, type });
  const onClose = () => setActiveAction(null);

  // Returned JSX
  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the Modal context
export const useModal = (): ModalContextType => {
  // Getting the data from the context
  const context = useContext(ModalContext);

  // Error if tried to use outside of Context scope
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  // Getting the values out of context
  const { isOpen, onOpen, onClose } = context;

  // Return the values
  return { isOpen, onOpen, onClose };
};
