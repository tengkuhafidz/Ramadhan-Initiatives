export enum InitiativeType {
	Donation = 'Donation',
	Participation = 'Participation',
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
	heroTitle: '',
	heroDescription: '',
	//FOOTER
	footerText: 'This is an initiative is by',
	footerLinkableText: 'Websheets',
	footerLinkableUrl: 'https://websheets.pro',
	//SEO
	seoTitle: 'Ramadhan Initiatives',
	seoDescription:
		'List of good initiatives for us to participate in and contribute to this Ramadhan',
	seoBannerUrl: '/images/banner.png',
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}

export const ALL = 'All'

export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
