import { ReactNode, RefObject } from "react";

export type PopoverSidePosition = "top" | "left" | "right" | "bottom";

export interface PopoverProps {
  children: ReactNode;
  isOpen: boolean;
  anchor: RefObject<HTMLElement>;
  position: PopoverSidePosition;
  offset?: number;
  onClose: () => void;
}

export interface PopoverPosition {
  top: number;
  left: number;
}
