import { FC } from "react";

import NoteModal from "@/containers/note-modal/NoteModal";

import Button from "@/components/button/Button";

import useModalStore from "@/store/modal-store/modalStore";
import useNotesStore from "@/store/notes-store/notesStore";
import { Note } from "@/types";

const EmptyNotesView: FC = () => {
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
    <div className="home__empty-view">
      <p className="home__empty-view-text">
        You have no any notes. Click below to create one.
      </p>
      <div onClick={handleCreateNoteClick}>
        <Button>New Note</Button>
      </div>
    </div>
  );
};
export default EmptyNotesView;
