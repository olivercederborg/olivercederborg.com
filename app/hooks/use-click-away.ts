import { useEffect, useRef } from 'react'

const defaultEvents = ['mousedown', 'touchstart']

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}

export function useClickAway<TEvent extends Event = Event>(
  references: React.RefObject<HTMLElement>[] | null,
  onClickAway: (event: TEvent) => void
) {
  const savedCallback = useRef(onClickAway)
  useEffect(() => {
    savedCallback.current = onClickAway
  }, [onClickAway])

  useEffect(() => {
    const handler = (event: TEvent) => {
      if (references?.some(ref => ref.current && ref.current.contains(event.target as Node))) return
      onClickAway(event)
    }

    for (const event of defaultEvents) {
      on(document, event, handler)
    }

    return () => {
      for (const event of defaultEvents) {
        off(document, event, handler)
      }
    }
  }, [onClickAway, references])
}
