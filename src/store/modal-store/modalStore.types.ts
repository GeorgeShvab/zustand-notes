import { ReactNode } from "react";

export interface ModalStore {
  element: ReactNode | null;
  isOpen: boolean;
  open: (element: ReactNode) => void;
  close: () => void;
}
