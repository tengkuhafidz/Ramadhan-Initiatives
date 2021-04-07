import {GetStaticProps} from 'next'
import React from 'react'
import Content from '../components/Home/Content'
import Hero from '../components/Home/Hero'
import Layout from '../components/Layout'
import Footer from '../components/Layout/footer'
import Navbar from '../components/Layout/navbar'
import {getItems, getSiteData} from '../services/sheet'
import {SiteDataProvider} from '../utils/SiteDataContext'

export default function Index({siteData, items}) {
	return (
		<SiteDataProvider value={siteData}>
			<Layout>
				<div className="flex flex-col min-h-screen">
					<div
						className="bg-fixed bg-center"
						style={{backgroundImage: `url("/images/hero-bg.jpg")`}}
					>
						<div className="container mx-auto max-w-6xl pt-4 px-4">
							<Navbar />
							<Hero />
						</div>
					</div>
					<div className="container mx-auto max-w-6xl py-8 px-4">
						<Content items={items} />
						<Footer />
					</div>
				</div>
			</Layout>
		</SiteDataProvider>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const items = await getItems()
	const siteData = await getSiteData()

	return {
		props: {
			siteData,
			items,
		},
	}
}
