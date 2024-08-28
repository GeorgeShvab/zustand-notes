import { create } from "zustand";

import { SearchStore } from "./searchStore.types";

const useSearchStore = create<SearchStore>()((set) => ({
  value: "",
  setValue: (value: string) => set({ value }),
  clearValue: () => set({ value: "" })
}));

export default useSearchStore;
