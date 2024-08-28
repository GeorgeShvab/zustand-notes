import { create } from "zustand";

import { SnackbarStore } from "@/store/snackbar-store/snackbarStore.types";

const useSnackbarStore = create<SnackbarStore>()((set) => ({
  message: null,
  severity: null,
  isOpen: false,
  open: (data) => set({ ...data, isOpen: true }),
  close: () => set({ isOpen: false })
}));

export default useSnackbarStore;
