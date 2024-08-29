import { fireEvent, render, screen } from "@testing-library/react";

import { describe, expect, test, vi } from "vitest";

import NoteModal from "./NoteModal";

const mockOnSave = vi.fn();
const mockOnDelete = vi.fn();

const testNote = {
  title: "My Note Title",
  content: "My Note Content",
  color: "#F5F5F5"
};

const expectedChangedTestNote = {
  title: "My Note Test Title",
  content: "My Note Test Content",
  color: "#FAFAFA"
};

describe("Test NoteModal", () => {
  test("Shoudl call passed update callback when fields are filled and save buttons is clicked", () => {
    render(<NoteModal onSave={mockOnSave} />);

    const titleInput = screen.getAllByRole("textbox")[0];
    const contentInput = screen.getAllByRole("textbox")[1];

    fireEvent.change(titleInput, { target: { value: "My Note Title" } });
    fireEvent.change(contentInput, { target: { value: "My Note Content" } });

    const submitButton = screen.getByText("Save Note");
    fireEvent.click(submitButton);

    expect(mockOnSave).toHaveBeenCalled();
  });

  test("Shoudl change values of existing note and call passed callback with values", () => {
    render(<NoteModal onSave={mockOnSave} note={testNote} />);

    const titleInput = screen.getAllByRole("textbox")[0];
    const contentInput = screen.getAllByRole("textbox")[1];

    fireEvent.change(titleInput, {
      target: { value: expectedChangedTestNote.title }
    });
    fireEvent.change(contentInput, {
      target: { value: expectedChangedTestNote.content }
    });

    const selectColorButton = screen.getByLabelText("Select note color");
    fireEvent.click(selectColorButton);

    const secondColorButton = screen.getAllByLabelText("Select color")[1];
    fireEvent.click(secondColorButton);

    const submitButton = screen.getByText("Save Note");
    fireEvent.click(submitButton);

    expect(mockOnSave).toHaveBeenCalledWith(expectedChangedTestNote);
  });

  test("Shoudl call passed delete callback when delete button is clicked", () => {
    render(
      <NoteModal onSave={mockOnSave} onDelete={mockOnDelete} note={testNote} />
    );

    const deleteButton = screen.getByLabelText("Delete Note");
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalled();
  });
});
