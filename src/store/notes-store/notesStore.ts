import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { NotesStore } from "@/store/notes-store/notesStore.types";
import { Note } from "@/types";
import createNote from "@/utils/create-note/createNote";

// type Middleware = (
//   initializer: StateCreator<NotesStore, []>
// ) => StateCreator<NotesStore, []>;

// type SetFunctionParams = Parameters<
//   Parameters<StateCreator<NotesStore, []>>[0]
// >;

// const middleware: Middleware =
//   (initializer: StateCreator<NotesStore, []>) =>
//   (set, ...args) => {
//     const customSet = (...setArgs: SetFunctionParams) => {
//       console.log("Set is called");

//       set(...setArgs);
//     };

//     return initializer(customSet, ...args);
//   };

const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      data: [],
      createNote: (data) =>
        set((state) => ({ data: [...state.data, createNote(data)] })),
      editNote: (data) =>
        set((state) => ({
          data: state.data.map((item) => {
            if (item.id !== data.id) return item;

            return { ...item, ...data, updatedAt: Date.now() };
          })
        })),
      deleteNote: (id) =>
        set((state) => ({
          data: state.data.filter((item) => item.id !== id)
        }))
      // asyncAction: async () => {
      //   const data = await new Promise<Note[]>((resolve) => {
      //     setTimeout(() => {
      //       resolve([
      //         createNote({
      //           title: "Title",
      //           content: "Content"
      //         })
      //       ]);
      //     }, 2500);
      //   });

      //   return set({ data });
      // }
    }),
    {
      name: "notes",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useNotesStore;
