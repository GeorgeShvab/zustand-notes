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
        containerRef.current?.contains(e.target as any) ||
        ignore?.some((item) => item.current?.contains(e.target as any));

      if (shouldIgnore) return;

      console.log("CLosed");

      onOutsideClick(e);
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <span ref={containerRef}>{children}</span>;
};

export default DetectOutsideClick;
