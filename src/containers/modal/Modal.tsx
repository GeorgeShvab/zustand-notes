import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import Portal from "../portal/Portal";
import { ModalProps } from "./Modal.types";
import "./styles.scss";
import cn from "../../utils/cn/cn";

const Modal: FC<ModalProps> = ({ children, onClose, isOpen }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useLayoutEffect(() => {
    clearTimeout(closeTimer.current);

    if (isOpen) {
      if (isMounted) {
        setIsMounted(true);
      } else {
        setIsMounted(true);
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);

      closeTimer.current = setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      setIsVisible(true);
    }
  }, [isMounted]);

  if (!isMounted) return null;

  const backdropClassName = cn(
    "modal__backdrop",
    isVisible && "modal__backdrop_visible"
  );

  const containerClassName = cn(
    "modal__container",
    isVisible && "modal__container_visible"
  );

  return (
    <Portal>
      <div className={backdropClassName} onClick={onClose} />
      <div className={containerClassName}>{children}</div>
    </Portal>
  );
};

export default Modal;
