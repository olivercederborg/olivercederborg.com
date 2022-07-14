import { useEffect, useState } from 'react'

import throttle from 'lodash/throttle'
import useWindowSize from 'react-use/lib/useWindowSize'

type UseScrollspyParameters<Id extends string> = {
  /** Ids of the sections to watch.
   */
  ids: Id[]

  /** Href values of the links to apply active class to.
   */
  hrefs: string[]

  /** Offset for when the section should be considered active.
   *
   * @default 0
   */
  offset?: number | 'topCenter'

  /** Class for the anchor that links to the active section.
   *
   * @default 'active-scrollspy-item''
   */
  activeClass?: string

  /** Id of the initially active section.
   */
  initialId?: Id

  /** The number of milliseconds to throttle invocations to.
   *
   * @default 200
   */
  throttleMs?: number
}

export const useScrollspy = <Id extends string>({
  ids,
  hrefs,
  offset = 0,
  activeClass = 'active-scrollspy-item',
  initialId = ids[0],
  throttleMs = 200,
}: UseScrollspyParameters<Id>) => {
  const [activeId, setActiveId] = useState<Id>(initialId)
  const { height } = useWindowSize()

  const applyActiveClass = (href: string) => {
    const elements = document.querySelectorAll(`a[href="${href}"]`)
    if (!elements) return
    for (const element of elements) element.classList.add(activeClass)
  }

  const removeActiveClass = (href: string) => {
    const elements = document.querySelectorAll(`a[href="${href}"]`)
    if (!elements) return
    for (const element of elements) element.classList.remove(activeClass)
  }

  const handleScroll = throttle(() => {
    for (const [index, id] of ids.entries()) {
      const section = document.querySelector(`#${id}`)
      const href = hrefs[index]

      if (!(section instanceof Element)) return
      if (id !== activeId) removeActiveClass(href)

      const { top, bottom } = section.getBoundingClientRect()

      if (typeof offset === 'number' && top + offset < 0 && bottom + offset > 0) {
        setActiveId(id)
        applyActiveClass(href)
      }
      if (offset === 'topCenter' && top <= height / 2 && bottom > height / 2) {
        setActiveId(id)
        applyActiveClass(href)
      }
    }
  }, throttleMs)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return activeId
}
