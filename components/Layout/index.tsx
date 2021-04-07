import SEO from './seo'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<SEO />
			<main className="flex-grow">{children}</main>
		</div>
	)
}
