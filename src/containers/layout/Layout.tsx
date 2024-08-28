import { FC, memo } from "react";

import Header from "@/containers/header/Header";
import { LayoutProps } from "@/containers/layout/Layout.types";
import ModalContainer from "@/containers/modal-container/ModalContainer";
import SnackbarContainer from "@/containers/snackbar-container/SnackbarContainer";

import "@/containers/layout/styles.scss";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SnackbarContainer>
      <ModalContainer>
        <div className="layout">
          <Header />
          <main>{children}</main>
        </div>
      </ModalContainer>
    </SnackbarContainer>
  );
};

export default memo(Layout);
