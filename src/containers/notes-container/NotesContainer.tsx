import { FC } from "react";

import NoteModal from "@/containers/note-modal/NoteModal";
import { NotesContainerProps } from "@/containers/notes-container/NotesContainer.types";

import NoteCard from "@/components/note-card/NoteCard";

import useModalStore from "@/store/modal-store/modalStore";
import useNotesStore from "@/store/notes-store/notesStore";
import useSnackbarStore from "@/store/snackbar-store/snackbarStore";
import { Note } from "@/types";

import "@/containers/notes-container/styles.scss";

const NotesContainer: FC<NotesContainerProps> = ({ data }) => {
  const modal = useModalStore();
  const snackbar = useSnackbarStore();

  const { editNote, deleteNote } = useNotesStore();

  const noteCards = data.map((item) => {
    const handleClick = () => {
      const handleSave = (data: Pick<Note, "title" | "content">) => {
        editNote({ id: item.id, ...data });
        snackbar.open({
          message: "Note was updated successfully",
          severity: "success"
        });
        modal.close();
      };

      const handleDelete = () => {
        deleteNote(item.id);
        snackbar.open({
          message: "Note was deleted successfully",
          severity: "success"
        });
        modal.close();
      };

      modal.open(
        <NoteModal
          note={{ title: item.title, content: item.content }}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      );
    };

    return <NoteCard key={item.id} note={item} onClick={handleClick} />;
  });

  return <div className="notes-container">{noteCards}</div>;
};

export default NotesContainer;
