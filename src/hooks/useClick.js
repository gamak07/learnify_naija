// hooks/useClickHandler.js
import { useEffect } from "react";

export default function useClickHandler(ref, callback, closeOnInside = false) {
  useEffect(() => {
    function handleClick(event) {
      if (!ref.current) return;

      const isInside = ref.current.contains(event.target);
      if (closeOnInside || !isInside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback, closeOnInside]);
}
