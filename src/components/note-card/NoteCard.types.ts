import { MouseEvent } from "react";
import { Note } from "@/types";

export interface NoteCardProps {
  note: Pick<Note, "title" | "content" | "color">;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}
