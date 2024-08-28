import { Note } from "@/types";

const searchNotes = (notes: Note[], value: string) => {
  return notes.filter((item) => {
    const regexp = new RegExp(value, "gi");
    return regexp.test(item.title) || regexp.test(item.content);
  });
};

export default searchNotes;
