import { useEffect } from "react";

/**
 * Hook to detect clicks outside the passed ref and trigger a callback
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks
 * @param {Function} handler - Callback to run when clicked outside
 */
const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
