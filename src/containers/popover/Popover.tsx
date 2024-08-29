import { FC, useLayoutEffect, useRef, useState } from "react";

import DetectOutsideClick from "@/containers/detect-outside-click/DetectOutsideClick";
import {
  PopoverPosition,
  PopoverProps
} from "@/containers/popover/Popover.types";
import getPopoverPosition from "@/containers/popover/getPopoverPosition";
import Portal from "@/containers/portal/Portal";

import useAnimation from "@/hooks/use-animation/useAnimation";
import cn from "@/utils/cn/cn";

import "@/containers/popover/styles.scss";

const Popover: FC<PopoverProps> = ({
  children,
  isOpen,
  anchor,
  position,
  offset = 0,
  onClose
}) => {
  const { isMounted, isVisible } = useAnimation(isOpen);

  const popoverContainer = useRef<HTMLDivElement>(null);

  const [popoverPosition, setPopoverPosition] = useState<PopoverPosition>();

  useLayoutEffect(() => {
    if (anchor.current && popoverContainer.current) {
      const anchorPosition = anchor.current.getBoundingClientRect();
      const popoverPosition = popoverContainer.current.getBoundingClientRect();

      const calculatedPos = getPopoverPosition(
        anchorPosition,
        popoverPosition,
        position,
        offset
      );

      setPopoverPosition(calculatedPos);
    }
  }, [isOpen, isMounted]);

  if (!isMounted) return null;

  return (
    <Portal>
      <DetectOutsideClick onOutsideClick={onClose} ignore={[anchor]}>
        <div
          className={cn("popover", isVisible && "popover_visible")}
          style={{
            left: popoverPosition?.left + "px",
            top: popoverPosition?.top + "px"
          }}
          ref={popoverContainer}
        >
          {children}
        </div>
      </DetectOutsideClick>
    </Portal>
  );
};

export default Popover;
