import { FC, useRef } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "@/containers/portal/Portal.types";

const Portal: FC<PortalProps> = ({ children }) => {
  const container = useRef(document.querySelector("#portal")!);

  if (!container.current) {
    const portalContainer = document.createElement("div");
    portalContainer.id = "portal";

    document.body.appendChild(portalContainer);

    container.current = portalContainer;
  }

  return createPortal(children, container.current);
};

export default Portal;
