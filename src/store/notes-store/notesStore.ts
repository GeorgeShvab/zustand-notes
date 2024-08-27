import { create } from "zustand";
import { NotesStore } from "./noteStore.types";
import { createJSONStorage, persist } from "zustand/middleware";
import getRandomColor from "../../utils/get-random-color/getRandomColor";

const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      data: [],
      createNote: (data) =>
        set((state) => {
          const id = crypto.randomUUID();
          const createdAt = Date.now();
          const updatedAt = createdAt;

          const newNote = {
            ...data,
            updatedAt,
            createdAt,
            id,
            color: getRandomColor(),
          };

          return { data: [...state.data, newNote] };
        }),
      editNote: (data) =>
        set((state) => {
          const updatedAt = Date.now();

          return {
            data: state.data.map((item) =>
              item.id === data.id ? { ...item, ...data, updatedAt } : item
            ),
          };
        }),
      deleteNote: (id) =>
        set((state) => ({
          data: state.data.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "notes",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useNotesStore;
