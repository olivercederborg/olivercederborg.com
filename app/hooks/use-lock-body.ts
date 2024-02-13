import { useLayoutEffect } from 'react'

/**
 * Prevents scrolling of the body element by setting the overflow property to 'hidden'.
 * Restores the original overflow property when the component unmounts.
 * @param lock - Whether to lock the body or not.
 */
export function useLockBody(lock: boolean) {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = lock ? 'hidden' : originalStyle
    return () => (document.body.style.overflow = originalStyle)
  }, [lock])
}
