import { FC } from "react";

import { NoteCardProps } from "@/components/note-card/NoteCard.types";

import "@/components/note-card/styles.scss";

const NoteCard: FC<NoteCardProps> = ({
  note: { title, content, color },
  onClick
}) => {
  return (
    <div
      className="note-card"
      style={{ "--card-bg-color": color }}
      onClick={onClick}
      role="button"
    >
      <h4 className="note-card__title">{title}</h4>
      <p className="note-card__content">{content}</p>
    </div>
  );
};

export default NoteCard;
