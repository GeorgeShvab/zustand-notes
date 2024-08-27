import { useCallback } from "react";
import throttle from "../../utils/throttle/throttle";

const useThrottle = (
  fn: (...args: any[]) => void,
  ms: number = 250,
  dependancyArray: any[] = []
) => {
  const memoizedFn = useCallback(throttle(fn, ms), dependancyArray);

  return memoizedFn;
};

export default useThrottle;
