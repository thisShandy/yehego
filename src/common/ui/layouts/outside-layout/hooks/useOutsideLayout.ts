// @ts-nocheck
import { useEffect } from "react";

export const useOutsideAlerter = (ref, setActive: (value: ((prevState: boolean) => boolean) | boolean) => void) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
