import { FC, PropsWithChildren, memo } from "react";

import { LayoutProps } from "@/containers/layout/Layout.types";
import Modal from "@/containers/modal/Modal";

import useModalStore from "@/store/modal-store/modalStore";

import "@/containers/layout/styles.scss";

const Content: FC<PropsWithChildren> = memo(({ children }) => children);

const Layout: FC<LayoutProps> = ({ children }) => {
  const modal = useModalStore();

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        {modal.element}
      </Modal>
      <main>
        <div className="layout">
          <Content>{children}</Content>
        </div>
      </main>
    </>
  );
};

export default memo(Layout);
