import { createContext, FC, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext<{
	isDarkMode: boolean
	toggleTheme: () => void
}>({
	isDarkMode: false,
	toggleTheme: () => {}
})

export const useTheme = () => {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext)
	return { isDarkMode, toggleTheme }
}

export const ThemeProvider: FC = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode)
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const darkMode: boolean = !!window.localStorage.getItem('isDarkMode')
			if (darkMode === true) {
				setIsDarkMode(true)
			} else {
				setIsDarkMode(false)
			}
		}
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined') return
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
			window.localStorage.setItem('isDarkMode', 'true')
		} else {
			document.documentElement.classList.remove('dark')
			window.localStorage.removeItem('isDarkMode')
		}
	}, [isDarkMode])

	return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
