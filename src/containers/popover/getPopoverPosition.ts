import { PopoverSidePosition } from "@/containers/popover/Popover.types";

const getPopoverPosition = (
  anchorPos: DOMRect,
  popoverPos: DOMRect,
  position: PopoverSidePosition,
  offset: number = 0
) => {
  switch (position) {
    case "bottom":
      return {
        top: anchorPos.bottom + document.documentElement.scrollTop + offset,
        left:
          anchorPos.left +
          document.documentElement.scrollLeft +
          anchorPos.width / 2 -
          popoverPos.width / 2
      };

    case "top":
      return {
        top:
          anchorPos.top +
          document.documentElement.scrollTop -
          offset -
          popoverPos.height,
        left:
          anchorPos.left +
          document.documentElement.scrollLeft +
          anchorPos.width / 2 -
          popoverPos.width / 2
      };

    case "left":
      return {
        top:
          anchorPos.top +
          document.documentElement.scrollTop +
          anchorPos.height / 2 -
          popoverPos.height / 2,
        left:
          anchorPos.left +
          document.documentElement.scrollLeft -
          offset -
          popoverPos.width
      };

    case "right":
      return {
        top:
          anchorPos.top +
          document.documentElement.scrollTop +
          anchorPos.height / 2 -
          popoverPos.height / 2,
        left: anchorPos.right + document.documentElement.scrollLeft + offset
      };
    default:
      return {} as never;
  }
};

export default getPopoverPosition;
