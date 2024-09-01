import { Note } from "@/types";

export interface CreateNoteParams {
  title: string;
  content: string;
  color: string;
}

export interface EditNoteParams extends Partial<CreateNoteParams> {
  id: string;
}

export interface NotesStore {
  data: Note[];
  createNote: (data: CreateNoteParams) => void;
  deleteNote: (id: string) => void;
  editNote: (data: EditNoteParams) => void;
}
