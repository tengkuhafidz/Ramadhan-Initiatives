export enum InitiativeType {
	Favourite = '💖 My Favourites',
	Donation = '🎁 Donation',
	Participation = '✊ Participation',
	Resource = '🗂️ Resource',
}

export interface Item {
	id: number
	title: string
	organisation: string
	type: InitiativeType
	tags: string[]
	posterUrl: string
	initiativeUrl: string
	isActive: boolean
}

export interface SiteData {
	// NAVBAR
	logoUrl: string
	navButtonText: string
	navButtonUrl: string
	navMenuText: string
	navMenuUrl: string
	//HERO
	heroTitle: string
	heroDescription: string
	//FOOTER
	footerText: string
	footerLinkableText: string
	footerLinkableUrl: string
	//SEO
	seoTitle: string
	seoDescription: string
	seoBannerUrl: string
	//ANNOUNCEMENT BAR
	announcementMessage: string
	announcementDestinationUrl: string
}

export const defaultSiteData: SiteData = {
	// NAVBAR
	logoUrl: '/images/logo.png',
	navButtonText: 'Submit Initiative',
	navButtonUrl:
		'https://docs.google.com/forms/d/1qc29SafinC09L0wrPLDeOab_ouUThEa-gipSySFeYC0',
	navMenuText: '',
	navMenuUrl: '',
	//HERO
	heroTitle: 'Ramadhan Initiative',
	heroDescription:
		"We all want to maximise our good deeds during Ramadhan. Here's a list of initiatives that might be able to help us attain that insyaallah.",
	//FOOTER
	footerText: 'This is an initiative is by',
	footerLinkableText: 'Websheets',
	footerLinkableUrl: 'https://websheets.co',
	//SEO
	seoTitle: 'Ramadhan Initiatives',
	seoDescription: 'List of good initiatives for us to look into this Ramadhan',
	seoBannerUrl: '/images/banner.png',
	//ANNOUNCEMENT BAR
	announcementMessage:
		'Click here for Terawih prayers booking guide in Singapore 🇸🇬',
	announcementDestinationUrl:
		'https://www.facebook.com/MUIS.SG/posts/10158740795711329',
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}

export const ALL = 'All'

export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
export const HOCKEYSTACK_KEY = process.env.HOCKEYSTACK_KEY
