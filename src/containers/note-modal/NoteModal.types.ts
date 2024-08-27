import { Note } from "@/types";

export interface NoteModalProps {
  note?: Pick<Note, "title" | "content">;
  onSave: (data: Pick<Note, "title" | "content">) => void;
  onDelete?: () => void;
}
