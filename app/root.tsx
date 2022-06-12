import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
	useLoaderData,
} from '@remix-run/react'
import type { LinksFunction } from '@remix-run/react/routeModules'
import type React from 'react'
import { StrictMode } from 'react'
import type { LoaderFunction } from 'remix'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'

import type { Theme } from '~/hooks/use-theme'
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/hooks/use-theme'
import { getThemeSession } from '~/utils/theme.server'

import { Footer } from '~/components/footer'
import MobileNav from '~/components/mobile-navigation'
import { Navigation } from '~/components/navigation'

import tailwind from '~/tailwind.css'

export const links: LinksFunction = () => [
	{
		rel: 'icon',
		href: '/assets/logo.svg',
		type: 'image/svg',
	},
	{ rel: 'stylesheet', href: tailwind },
	{
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com',
	},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap',
	},
]

export type LoaderData = {
	theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => ({
	// eslint-disable-next-line unicorn/no-await-expression-member
	theme: await (await getThemeSession(request)).getTheme(),
})

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
	const { theme: loadedTheme } = useLoaderData<LoaderData>()
	const { theme } = useTheme()
	return (
		<html lang='en' className={clsx('scroll-p-32 scroll-smooth', theme === 'dark' && theme)}>
			<head>
				<meta charSet='utf8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				{title ? <title>{title}</title> : undefined}
				<Meta />
				<Links />
				<NonFlashOfWrongThemeEls ssrTheme={Boolean(loadedTheme)} />
			</head>
			<body className='bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50'>
				{children}
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	)
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='remix-app'>
			<Navigation />
			<MobileNav />
			{children}
			<Footer />
		</div>
	)
}

export default function App() {
	const { theme } = useLoaderData<LoaderData>()
	return (
		<StrictMode>
			<ThemeProvider specifiedTheme={theme}>
				<AnimatePresence exitBeforeEnter>
					<Document>
						<Layout>
							<Outlet />
						</Layout>
					</Document>
				</AnimatePresence>
			</ThemeProvider>
		</StrictMode>
	)
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
	// eslint-disable-next-line no-console
	console.error(error)
	return (
		<Document title='Error!'>
			<Layout>
				<div>
					<h1>There was an error</h1>
					<p>{error.message}</p>
					<hr />
					<p>Hey, developer, you should replace this with what you want your users to see.</p>
				</div>
			</Layout>
		</Document>
	)
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
	const caught = useCatch()

	let message
	switch (caught.status) {
		case 401:
			message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>
			break
		case 404:
			message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>
			break

		default:
			throw new Error(caught.data || caught.statusText)
	}

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<Layout>
				<div className='container'>
					<h1 className='mt-40'>
						{caught.status}: {caught.statusText}
					</h1>
					{message}
				</div>
			</Layout>
		</Document>
	)
}
