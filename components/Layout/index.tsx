import BackToTop from './back-to-top'
import SEO from './seo'
import AnnouncementBar from './announcement-bar'
import Head from 'next/head'
import {HOCKEYSTACK_KEY} from '../../utils/constants'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<Head>
				<script
					async
					data-apikey={HOCKEYSTACK_KEY}
					data-cookieless
					src="https://cdn.jsdelivr.net/npm/hockeystack@latest/hockeystack.min.js"
				></script>
			</Head>
			<SEO />
			<AnnouncementBar />
			<main className="flex-grow">{children}</main>
			<BackToTop />
		</div>
	)
}
