import { create } from "zustand";

import { SearchStore } from "@/store/search-store/searchStore.types";

const useSearchStore = create<SearchStore>()((set) => ({
  value: "",
  setValue: (value: string) => set({ value }),
  clearValue: () => set({ value: "" })
}));

export default useSearchStore;
