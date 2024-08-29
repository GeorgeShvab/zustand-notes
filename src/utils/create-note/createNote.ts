import { Note } from "@/types";

const createNote = (data: Pick<Note, "title" | "content" | "color">) => {
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  const updatedAt = createdAt;

  const newNote = {
    ...data,
    updatedAt,
    createdAt,
    id
  };

  return newNote;
};

export default createNote;
