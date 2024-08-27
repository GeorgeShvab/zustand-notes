import { create } from "zustand";
import { ModalStore } from "./modalStore.types";

const useModalStore = create<ModalStore>()((set) => ({
  element: null,
  isOpen: false,
  open: (element) => set({ element, isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useModalStore;
