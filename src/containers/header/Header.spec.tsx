import { fireEvent, render, screen } from "@testing-library/react";

import { vi } from "vitest";

import Header from "@/containers/header/Header";

import fireChange from "@/utils/fire-change/fireChange";

type MockNewNoteModalOnSave = { onSave: () => void };
interface MockNoteModalParams {
  props: MockNewNoteModalOnSave;
}

const mockSetSearchValue = vi.fn();
const mockOpenSnackbar = vi.fn();
const mockOpenNewNoteModal = vi.fn(({ props }: MockNoteModalParams) =>
  props.onSave()
);
const mockCloseNewNoteModal = vi.fn();
const mockCreateNote = vi.fn();

vi.mock("@/store/search-store/searchStore", () => ({
  default: vi.fn(() => ({
    setValue: mockSetSearchValue
  }))
}));

vi.mock("@/store/modal-store/modalStore", () => ({
  default: vi.fn(() => ({
    open: mockOpenNewNoteModal,
    close: mockCloseNewNoteModal
  }))
}));

vi.mock("@/store/snackbar-store/snackbarStore", () => ({
  default: vi.fn(() => ({
    open: mockOpenSnackbar
  }))
}));

vi.mock("@/containers/note-modal/NoteModal", () => ({
  default: ({ onSave }: MockNewNoteModalOnSave) => onSave()
}));

vi.mock("@/store/notes-store/notesStore", () => ({
  default: vi.fn(() => ({
    createNote: mockCreateNote
  }))
}));

describe("Test Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Should render search input and new note button", () => {
    const input = screen.getByRole("textbox");
    const createNewNoteButtons = screen.getAllByRole("button");

    expect(input).toBeInTheDocument();
    expect(createNewNoteButtons).toHaveLength(2);
  });

  test("Should set search query in store", () => {
    const inputEl = screen.getByRole("textbox");

    fireChange(inputEl, "query");

    expect(mockSetSearchValue).toHaveBeenCalledWith("query");
  });

  test("Should open new note modal when create note button is clicked", () => {
    const createNewNoteButtons = screen.getAllByRole("button");

    // There are two buttons because one is for desktops and another one for mobiles
    fireEvent.click(createNewNoteButtons[0]);
    fireEvent.click(createNewNoteButtons[1]);

    expect(mockOpenNewNoteModal).toHaveBeenCalledTimes(2);
  });

  test("Should call open snackbar, close modal and create note when note is saved", () => {
    const createNewNoteButton = screen.getAllByRole("button")[0];
    fireEvent.click(createNewNoteButton);

    expect(mockOpenNewNoteModal).toHaveBeenCalled();

    expect(mockOpenSnackbar).toHaveBeenCalled();
    expect(mockCloseNewNoteModal).toHaveBeenCalled();
    expect(mockCreateNote).toHaveBeenCalled();
  });
});
