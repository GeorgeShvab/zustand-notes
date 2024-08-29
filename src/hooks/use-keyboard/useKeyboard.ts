import { useEffect } from "react";

const useKeyboard = (
  keyCode: KeyboardEvent["code"],
  callback: (e: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        callback(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyCode]);
};

export default useKeyboard;
