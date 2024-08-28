import { create } from "zustand";

import { ModalStore } from "@/store/modal-store/modalStore.types";
import addScrollbarPlaceholder from "@/utils/add-scrollbar-placeholder/addScrollbarPlaceholder";
import removeScrollbarPlaceholder from "@/utils/remove-scrollbar-placeholder/removeScrollbarPlaceholder";

const useModalStore = create<ModalStore>()((set) => ({
  element: null,
  isOpen: false,
  open: (element) => {
    addScrollbarPlaceholder();
    set({ element, isOpen: true });
  },
  close: () => {
    removeScrollbarPlaceholder();
    set({ isOpen: false });
  }
}));

export default useModalStore;
