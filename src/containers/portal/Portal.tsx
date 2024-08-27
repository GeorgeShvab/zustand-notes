import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./Portal.types";

const Portal: FC<PortalProps> = ({ children }) => {
  const container = useRef(document.querySelector("#portal")!);

  return createPortal(children, container.current);
};

export default Portal;
