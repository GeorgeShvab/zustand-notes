import { ComponentProps, ReactNode } from "react";

export interface SnackbarProps extends ComponentProps<"div"> {
  children: ReactNode;
  severity: SnackbarSeverity;
}

export type SnackbarSeverity = "success" | "danger";
