import { FC } from "react";

import { ModalContainerProps } from "@/containers/modal-container/ModalContainer.types";
import Portal from "@/containers/portal/Portal";

import useAnimation from "@/hooks/use-animation/useAnimation";
import useKeyboard from "@/hooks/use-keyboard/useKeyboard";
import useModalStore from "@/store/modal-store/modalStore";
import cn from "@/utils/cn/cn";

import "@/containers/modal-container/styles.scss";

const ModalContainer: FC<ModalContainerProps> = ({ children }) => {
  const { isOpen, close, element } = useModalStore();

  const { isMounted, isVisible } = useAnimation(isOpen);

  useKeyboard("Escape", close);

  const backdropClassName = cn(
    "modal__backdrop",
    isVisible && "modal__backdrop_visible"
  );

  const containerClassName = cn(
    "modal__container",
    isVisible && "modal__container_visible"
  );

  const modalEl = isMounted ? (
    <Portal key="portal">
      <div className={backdropClassName} onClick={close} />
      <div className={containerClassName}>{element}</div>
    </Portal>
  ) : null;

  return [children, modalEl];
};

export default ModalContainer;
