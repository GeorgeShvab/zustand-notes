import { FC, memo } from "react";
import { LayoutProps } from "./Layout.types";
import "./styles.scss";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <div className="layout">{children}</div>
    </main>
  );
};

export default memo(Layout);
