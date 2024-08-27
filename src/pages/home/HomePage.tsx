import { ChangeEvent, useMemo, useState } from "react";

import Header from "@/containers/header/Header";
import NotesContainer from "@/containers/notes-container/NotesContainer";

import EmptyNotesView from "@/pages/home/EmptyNotesView";
import EmptySearchResultsView from "@/pages/home/EmptySearchResultsView";
import useNotesStore from "@/store/notes-store/notesStore";

import "@/pages/home/styles.scss";

const HomePage = () => {
  const { data: notes } = useNotesStore();

  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredNotes = useMemo(() => {
    return notes.filter((item) => {
      const regexp = new RegExp(searchValue, "gi");

      return regexp.test(item.title) || regexp.test(item.content);
    });
  }, [searchValue, notes]);

  let content;

  if (searchValue && !filteredNotes.length) {
    content = <EmptySearchResultsView />;
  } else if (!notes.length) {
    content = <EmptyNotesView />;
  } else {
    content = <NotesContainer data={filteredNotes} />;
  }

  return (
    <div className="home">
      <Header value={searchValue} onChange={handleChangeSearchValue} />
      <main>{content}</main>
    </div>
  );
};

export default HomePage;
