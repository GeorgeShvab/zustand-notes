import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import NoteCard from "../../components/note-card/NoteCard";
import NoteModal from "../../containers/note-modal/NoteModal";
import NoteEditModal from "../../containers/note-modal/NoteModal";
import PlusIcon from "../../icons/PlusIcon";
import useModalStore from "../../store/modal-store/modalStore";
import useNotesStore from "../../store/notes-store/notesStore";
import { Note } from "../../types";
import "./styles.scss";

const HomePage = () => {
  const notes = useNotesStore();
  const modal = useModalStore();

  const handleCreateNoteClick = () => {
    modal.open(<NoteModal onSave={notes.createNote} />);
  };

  const noteCards = notes.data.map((item) => {
    const handleClick = () => {
      const handleSave = (data: Pick<Note, "title" | "content">) => {
        notes.editNote({ id: item.id, ...data });
        modal.close();
      };

      const handleDelete = () => {
        notes.deleteNote(item.id);
        modal.close();
      };

      modal.open(
        <NoteEditModal
          note={{ title: item.title, content: item.content }}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      );
    };

    return <NoteCard key={item.id} note={item} onClick={handleClick} />;
  });

  const content = notes.data.length ? (
    <div className="home__notes-grid">{noteCards}</div>
  ) : (
    <div className="home__empty-view">
      <p className="home__empty-view-text">
        You have no any notes. Click below to create one.
      </p>
      <div onClick={handleCreateNoteClick}>
        <Button>New Note</Button>
      </div>
    </div>
  );

  return (
    <div className="home">
      <div className="home__header">
        <Input
          containerProps={{ className: "home__search-field" }}
          placeholder="search by word"
        />
        <Button className="home__search-button" onClick={handleCreateNoteClick}>
          <PlusIcon />
          <span>Create Note</span>
        </Button>
      </div>
      {content}
    </div>
  );
};

export default HomePage;
