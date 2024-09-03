import { act, renderHook } from "@testing-library/react";

import { test, vi } from "vitest";

import { notesStoreCreator } from "@/store/notes-store/notesStore";
import { NotesStore } from "@/store/notes-store/notesStore.types";
import {
  createTestStore,
  resetZustandStore
} from "@/utils/create-store/createStore";

const mockDate = 1725359438989;
const mockUUID = "e9ed80c4-bba9-4da2-a8aa-17229c6b5f85";

const useNotesStore = createTestStore(notesStoreCreator);

vi.spyOn(Date, "now").mockReturnValue(mockDate);
vi.spyOn(crypto, "randomUUID").mockReturnValue(mockUUID);

const mockNote = {
  title: "New Note Title",
  content: "New Note Conent",
  color: "#ffffff"
};

const expectedNote = {
  ...mockNote,
  createdAt: mockDate,
  updatedAt: mockDate,
  id: mockUUID
};

const editedNote = {
  ...expectedNote,
  title: "Edited Note"
};

describe("Test notes store", () => {
  let res: {
    current: NotesStore;
  };

  beforeEach(() => {
    resetZustandStore();

    const { result } = renderHook(() => useNotesStore());
    act(() => result.current.createNote(mockNote));
    res = result;
  });

  test("Should create new notes", () => {
    expect(res.current.data).toEqual([expectedNote]);
  });

  test("Should delete note", () => {
    act(() => res.current.deleteNote("e9ed80c4-bba9-4da2-a8aa-17229c6b5f85"));

    expect(res.current.data).toEqual([]);
  });

  test("Should edit note", () => {
    act(() => res.current.editNote(editedNote));
    expect(res.current.data).toEqual([editedNote]);
  });
});
