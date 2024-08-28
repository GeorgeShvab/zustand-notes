import { FC, memo } from "react";

import Header from "@/containers/header/Header";
import { LayoutProps } from "@/containers/layout/Layout.types";

import "@/containers/layout/styles.scss";

import ModalWrapper from "../modal-wrapper/ModalWrapper";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ModalWrapper>
      <div className="layout">
        <Header />
        <main>{children}</main>
      </div>
    </ModalWrapper>
  );
};

export default memo(Layout);
