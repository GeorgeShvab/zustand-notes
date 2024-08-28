import { SnackbarSeverity } from "@/components/snackbar/Snackbar.types";

export interface SnackbarConfiguration {
  message: string;
  severity: SnackbarSeverity;
}

export interface SnackbarStore {
  open: (data: SnackbarConfiguration) => void;
  close: () => void;
  message: string | null;
  severity: SnackbarSeverity | null;
  isOpen: boolean;
}
