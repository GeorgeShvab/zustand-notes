import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useAnimation = (isActive: boolean) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeTimer = useRef<NodeJS.Timeout>();

  useLayoutEffect(() => {
    clearTimeout(closeTimer.current);

    if (isActive) {
      if (isMounted) {
        setIsMounted(true);
      } else {
        setIsMounted(true);
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);

      closeTimer.current = setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
  }, [isActive]);

  useEffect(() => {
    if (isMounted) {
      setIsVisible(true);
    }
  }, [isMounted]);

  return { isMounted, isVisible };
};

export default useAnimation;
