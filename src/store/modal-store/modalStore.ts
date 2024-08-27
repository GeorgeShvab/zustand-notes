import { create } from "zustand";

import { ModalStore } from "@/store/modal-store/modalStore.types";

const useModalStore = create<ModalStore>()((set) => ({
  element: null,
  isOpen: false,
  open: (element) => {
    const hasScrollbar = document.body.scrollHeight > window.innerHeight;

    if (hasScrollbar) {
      document.body.style.paddingRight = "16.5px";
      document.body.style.overflow = "hidden";
    }

    set({ element, isOpen: true });
  },
  close: () => {
    document.body.style.paddingRight = "0";
    document.body.style.overflow = "auto";

    set({ isOpen: false });
  }
}));

export default useModalStore;
