import Cookies from 'js-cookie'
import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react'

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

	const toggleTheme = useCallback(() => setIsDarkMode(!isDarkMode), [isDarkMode])

	useEffect(() => {
		const hasDarkModeCookie: boolean = !!Cookies.get('isDarkMode')
		hasDarkModeCookie ? setIsDarkMode(true) : setIsDarkMode(false)
	}, [])

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
			Cookies.set('isDarkMode', 'true', {
				expires: 365
			})
		} else {
			document.documentElement.classList.remove('dark')
			Cookies.remove('isDarkMode')
		}
	}, [isDarkMode])

	return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
