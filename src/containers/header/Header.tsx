import { FC } from "react";

import { HeaderProps } from "@/containers/header/Header.types";
import NoteModal from "@/containers/note-modal/NoteModal";

import Button from "@/components/button/Button";
import Input from "@/components/input/Input";

import PlusIcon from "@/icons/PlusIcon";
import useModalStore from "@/store/modal-store/modalStore";
import useNotesStore from "@/store/notes-store/notesStore";
import { Note } from "@/types";

import "@/containers/header/styles.scss";

const Header: FC<HeaderProps> = (props) => {
  const modal = useModalStore();
  const notes = useNotesStore();

  const handleCreateNote = (data: Pick<Note, "title" | "content">) => {
    notes.createNote(data);
    modal.close();
  };

  const handleCreateNoteClick = () => {
    modal.open(<NoteModal onSave={handleCreateNote} />);
  };

  return (
    <header className="header">
      <Input
        containerProps={{ className: "header__search-field" }}
        placeholder="Search Notes"
        {...props}
      />
      <Button
        className="header__new-note-button"
        onClick={handleCreateNoteClick}
      >
        <PlusIcon />
        <span>Create Note</span>
      </Button>
    </header>
  );
};

export default Header;
