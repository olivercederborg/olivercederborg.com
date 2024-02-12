'use client'

import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const { resolvedTheme, setTheme, ...rest } = useNextTheme()

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return { resolvedTheme, toggleTheme, ...rest }
}
