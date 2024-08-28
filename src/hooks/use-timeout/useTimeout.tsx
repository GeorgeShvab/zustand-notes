import { DependencyList, useEffect, useRef } from "react";

const useTimeout = (
  callback: () => void,
  ms: number,
  dependencyArray: DependencyList
) => {
  const closeTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(callback, ms);

    return () => clearTimeout(closeTimer.current);
  }, dependencyArray);
};

export default useTimeout;
