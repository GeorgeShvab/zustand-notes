import { useDeferredValue, useMemo } from "react";

import NotesContainer from "@/containers/notes-container/NotesContainer";

import NotesMessageView from "@/pages/home/NotesMessageView";
import useNotesStore from "@/store/notes-store/notesStore";
import useSearchStore from "@/store/search-store/searchStore";
import searchNotes from "@/utils/search-notes/searchNotes";

import "@/pages/home/styles.scss";

const HomePage = () => {
  const { data: notes } = useNotesStore();

  const { value: searchValue } = useSearchStore();

  const deferredSearchValue = useDeferredValue(searchValue);

  const filteredNotes = useMemo(
    () => searchNotes(notes, deferredSearchValue),
    [deferredSearchValue, notes]
  );

  if ((searchValue && !filteredNotes.length) || !notes.length) {
    return (
      <NotesMessageView
        message="Nothing was found. Try to change prompt or create new note using button
      below."
      />
    );
  }

  if (!notes.length) {
    return (
      <NotesMessageView message="You have no any notes. Click below to create one." />
    );
  }

  return <NotesContainer data={filteredNotes} />;
};

export default HomePage;
