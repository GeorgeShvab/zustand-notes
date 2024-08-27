import { Note } from "@/types";
import getRandomColor from "@/utils/get-random-color/getRandomColor";

const createNote = (data: Pick<Note, "title" | "content">) => {
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  const updatedAt = createdAt;

  const newNote = {
    ...data,
    updatedAt,
    createdAt,
    id,
    color: getRandomColor()
  };

  return newNote;
};

export default createNote;
