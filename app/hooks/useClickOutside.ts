import { useCallback, useEffect } from "react";

export const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  handler: () => void
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (
        refs.some(
          (ref) => ref.current && ref.current.contains(e.target as Node)
        )
      )
        return;
      handler();
    },
    [refs, handler]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleClick]);
};
