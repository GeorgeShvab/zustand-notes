import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { NotesStore } from "@/store/notes-store/noteStore.types";
import createNote from "@/utils/create-note/createNote";

const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      data: [],
      createNote: (data) =>
        set((state) => ({ data: [...state.data, createNote(data)] })),
      editNote: (data) =>
        set((state) => ({
          data: state.data.map((item) =>
            item.id === data.id
              ? { ...item, ...data, updatedAt: Date.now() }
              : item
          )
        })),
      deleteNote: (id) =>
        set((state) => ({
          data: state.data.filter((item) => item.id !== id)
        }))
    }),
    {
      name: "notes",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useNotesStore;
