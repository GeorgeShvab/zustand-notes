import { ChangeEvent, FC } from "react";

import NoteModal from "@/containers/note-modal/NoteModal";

import Button from "@/components/button/Button";
import IconButton from "@/components/icon-button/IconButton";
import Input from "@/components/input/Input";

import PlusIcon from "@/icons/PlusIcon";
import useModalStore from "@/store/modal-store/modalStore";
import useNotesStore from "@/store/notes-store/notesStore";
import useSearchStore from "@/store/search-store/searchStore";
import useSnackbarStore from "@/store/snackbar-store/snackbarStore";
import { Note } from "@/types";

import "@/containers/header/styles.scss";

const Header: FC = () => {
  const modal = useModalStore();
  const notes = useNotesStore();

  const snackbar = useSnackbarStore();

  const search = useSearchStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    search.setValue(e.target.value);
  };

  const handleCreateNote = (
    data: Pick<Note, "title" | "content" | "color">
  ) => {
    notes.createNote(data);
    snackbar.open({
      message: "Note was created successfully",
      severity: "success"
    });
    modal.close();
  };

  const handleCreateNoteClick = () => {
    modal.open(<NoteModal onSave={handleCreateNote} />);
  };

  return (
    <header className="header">
      <Input
        containerProps={{ className: "header__search-field" }}
        aria-label="Search Notes"
        name="query"
        placeholder="Search Notes"
        value={search.value}
        onChange={handleChange}
      />
      <Button
        className="header__new-note-button desktop"
        onClick={handleCreateNoteClick}
      >
        <PlusIcon />
        <span>Create Note</span>
      </Button>
      <IconButton
        className="header__new-note-button mobile"
        aria-label="Create new note"
        onClick={handleCreateNoteClick}
      >
        <PlusIcon />
      </IconButton>
    </header>
  );
};

export default Header;
