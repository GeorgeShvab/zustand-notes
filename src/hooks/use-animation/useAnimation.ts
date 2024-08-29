import { useEffect, useLayoutEffect, useRef, useState } from "react";

// This hook is for opening and closing animation
// Is mounted indicates whether component I am doing animation for should be
const useAnimation = (isActive: boolean, ms: number = 300) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeTimer = useRef<NodeJS.Timeout>();

  useLayoutEffect(() => {
    clearTimeout(closeTimer.current);

    if (isActive) {
      setIsMounted(true);
    } else {
      setIsVisible(false);

      closeTimer.current = setTimeout(() => {
        setIsMounted(false);
      }, ms);
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
