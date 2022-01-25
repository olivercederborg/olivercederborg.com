import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json, Link } from 'remix'

type IndexData = {
	resources: Array<{ name: string; url: string }>
	demos: Array<{ name: string; to: string }>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
	let data: IndexData = {
		resources: [
			{
				name: 'Remix Docs',
				url: 'https://remix.run/docs'
			},
			{
				name: 'React Router Docs',
				url: 'https://reactrouter.com/docs'
			},
			{
				name: 'Remix Discord',
				url: 'https://discord.gg/VBePs6d'
			}
		],
		demos: [
			{
				to: 'demos/actions',
				name: 'Actions'
			},
			{
				to: 'demos/about',
				name: 'Nested Routes, CSS loading/unloading'
			},
			{
				to: 'demos/params',
				name: 'URL Params and Error Boundaries'
			}
		]
	}

	// https://remix.run/api/remix#json
	return json(data)
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
	return {
		title: 'Oliver Cederborg - Front-end developer',
		description: "Hi, I'm Oliver Cederborg, a front-end developer from Denmark."
	}
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
	return (
		<div className='bg-stone-900'>
			<main>
				<h1>
					<div>Hi, I'm Oliver </div>
					<div>I design and develop applications.</div>
				</h1>
			</main>
		</div>
	)
}
