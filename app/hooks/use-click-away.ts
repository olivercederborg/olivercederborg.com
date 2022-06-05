import { useCallback, useEffect } from 'react'

const defaultEvents = ['mousedown', 'touchstart']

export const useClickAway = <TEvent extends Event>(
	references: React.RefObject<HTMLElement>[] | null,
	onClickAway: (event: TEvent) => void
) => {
	const handleClick = useCallback(
		event => {
			if (references?.some(ref => ref.current && ref.current.contains(event.target as Node)))
				return
			onClickAway(event)
		},
		[references, onClickAway]
	)
	useEffect(() => {
		for (const event of defaultEvents) {
			document.addEventListener(event, handleClick)
		}

		return () => {
			for (const event of defaultEvents) {
				document.removeEventListener(event, handleClick)
			}
		}
	}, [handleClick])
}
