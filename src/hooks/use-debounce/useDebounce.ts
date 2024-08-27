import { useCallback } from "react";
import debounce from "@/utils/debounce/debounce";

const useDebounce = (
  fn: (...args: any[]) => void,
  ms: number = 250,
  dependancyArray: any[] = []
) => {
  const memoizedFn = useCallback(debounce(fn, ms), dependancyArray);

  return memoizedFn;
};

export default useDebounce;
