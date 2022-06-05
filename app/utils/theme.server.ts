import { createCookieSessionStorage } from 'remix'
import { Theme } from '~/hooks/use-theme'

const themeStorage = createCookieSessionStorage({
	cookie: {
		name: 'OC_theme',
		secure: true,
		// secrets: [process.env.SESSION_SECRET],
		sameSite: 'lax',
		path: '/',
		expires: new Date('2097-07-21'),
		httpOnly: true,
	},
})

export async function getThemeSession(request: Request) {
	const session = await themeStorage.getSession(request.headers.get('Cookie'))
	return {
		getTheme: () => {
			const themeValue = session.get('theme')
			return themeValue || Theme.DARK
		},
		setTheme: (theme: Theme) => session.set('theme', theme),
		commit: () => themeStorage.commitSession(session),
	}
}
