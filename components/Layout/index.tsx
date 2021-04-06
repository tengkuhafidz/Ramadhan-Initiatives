import Navbar from './navbar'
import Footer from './footer'
import SEO from './seo'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto max-w-6xl py-4 px-4 flex flex-col min-h-screen">
				<SEO />
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
		</div>
	)
}
