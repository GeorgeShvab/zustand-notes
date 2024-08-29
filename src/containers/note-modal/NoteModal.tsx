import { FC, useRef, useState } from "react";

import ColorPicker from "@/containers/color-picker/ColorPicker";
import {
  ModalFormValues,
  NoteModalProps
} from "@/containers/note-modal/NoteModal.types";
import Popover from "@/containers/popover/Popover";

import Button from "@/components/button/Button";
import IconButton from "@/components/icon-button/IconButton";
import Input from "@/components/input/Input";
import Textarea from "@/components/textarea/Textarea";

import cardBgColors from "@/constants/colors";
import useForm from "@/hooks/use-form/useForm";
import DeleteIcon from "@/icons/DeleteIcon";
import getRandomColor from "@/utils/get-random-color/getRandomColor";

import "@/containers/note-modal/styles.scss";

const NoteModal: FC<NoteModalProps> = ({
  onSave,
  onDelete,
  note = { title: "", content: "", color: getRandomColor() }
}) => {
  const { values, errors, onSubmit, onChange, setValue } =
    useForm<ModalFormValues>({
      initialValues: note,
      onSubmit: onSave
    });

  const handleDeleteClick = () => {
    if (onDelete) onDelete();
  };

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverRef = useRef<HTMLButtonElement>(null);

  const handleColorChange = (color: string) => {
    setIsPopoverOpen(false);
    setValue("color", color);
  };

  return (
    <form className="note-modal" onSubmit={onSubmit}>
      <div className="note-modal__title-container">
        <Input
          placeholder="Title"
          containerProps={{ className: "note-modal__title-input" }}
          name="title"
          isError={errors.title}
          value={values.title}
          onChange={onChange}
        />
        <IconButton
          style={{ backgroundColor: values.color }}
          type="button"
          className="note-modal__color-btn"
          onClick={() => setIsPopoverOpen((prev) => !prev)}
          ref={popoverRef}
        />
        <Popover
          position="bottom"
          offset={12}
          anchor={popoverRef}
          isOpen={isPopoverOpen}
          onClose={() => setIsPopoverOpen(false)}
        >
          <ColorPicker
            className="note-modal__color-picker"
            colors={cardBgColors}
            color={values.color}
            onChange={handleColorChange}
          />
        </Popover>
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
