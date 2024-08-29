import { Note } from "@/types";

export interface NoteModalProps {
  note?: Pick<Note, "title" | "content" | "color">;
  onSave: (data: Pick<Note, "title" | "content" | "color">) => void;
  onDelete?: () => void;
}

export type ModalFormValues = Pick<Note, "title" | "content" | "color">;
