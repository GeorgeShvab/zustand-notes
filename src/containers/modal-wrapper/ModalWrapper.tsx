import { FC, PropsWithChildren, memo } from "react";

import Modal from "@/containers/modal/Modal";

import useModalStore from "@/store/modal-store/modalStore";

const Content: FC<PropsWithChildren> = memo(({ children }) => children);

const ModalWrapper: FC<PropsWithChildren> = ({ children }) => {
  const modal = useModalStore();

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        {modal.element}
      </Modal>
      <Content>{children}</Content>
    </>
  );
};

export default ModalWrapper;
