import { FC, useEffect, useRef } from "react";

import { DetectOutsideClickProps } from "@/containers/detect-outside-click/DetectOutsideClick.types";

const DetectOutsideClick: FC<DetectOutsideClickProps> = ({
  children,
  ignore,
  onOutsideClick
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const shouldIgnore =
        containerRef.current?.contains(e.target as HTMLElement) ||
        ignore?.some((item) => item.current?.contains(e.target as HTMLElement));

      if (shouldIgnore) return;

      onOutsideClick(e);
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <span ref={containerRef}>{children}</span>;
};

export default DetectOutsideClick;
