import { FC } from "react";

import { NoteModalProps } from "@/containers/note-modal/NoteModal.types";

import Button from "@/components/button/Button";
import IconButton from "@/components/icon-button/IconButton";
import Input from "@/components/input/Input";
import Textarea from "@/components/textarea/Textarea";

import useForm from "@/hooks/use-form/useForm";
import DeleteIcon from "@/icons/DeleteIcon";
import { Note } from "@/types";

import "@/containers/note-modal/styles.scss";

const NoteModal: FC<NoteModalProps> = ({
  onSave,
  onDelete,
  note = { title: "", content: "" }
}) => {
  const { values, errors, onSubmit, onChange } = useForm<
    Pick<Note, "title" | "content">
  >({
    initialValues: note,
    onSubmit: onSave
  });

  const handleDeleteClick = () => {
    onDelete && onDelete();
  };

  return (
    <form className="note-modal" onSubmit={onSubmit}>
      <div className="note-modal__title-container">
        <Input
          placeholder="Title"
          name="title"
          isError={errors.title}
          value={values.title}
          onChange={onChange}
        />
      </div>
      <div className="note-modal__content-container">
        <Textarea
          name="content"
          placeholder="Content"
          value={values.content}
          onChange={onChange}
        />
      </div>
      <div className="note-modal__footer">
        <Button type="submit" className="note-modal__footer-save-btn">
          Save Note
        </Button>
        {onDelete && (
          <IconButton
            variant="danger"
            className="note-modal__footer-delete-btn"
            type="button"
            onClick={handleDeleteClick}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    </form>
  );
};

export default NoteModal;
