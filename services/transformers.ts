import {defaultSiteData, Item, SiteData} from '../utils/constants'

const stringToBoolean = (field: string) => field === 'TRUE'
const stringToArray = (field: string) =>
	field?.split(',').map(field => field.trim())
export const toLowercase = (field: string) => field?.toLowerCase()

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		title: itemValue[0],
		organisation: itemValue[1],
		type: itemValue[2],
		tags: stringToArray(itemValue[3]),
		posterUrl: itemValue[4],
		initiativeUrl: itemValue[5],
		isActive: stringToBoolean(itemValue[6]),
	}))
}

export const transformSiteData = (siteDataValue: any[]): SiteData => ({
	// NAVBAR
	logoUrl: siteDataValue[1] || defaultSiteData.logoUrl,
	navButtonText: siteDataValue[2],
	navButtonUrl: siteDataValue[3],
	navMenuText: siteDataValue[4],
	navMenuUrl: siteDataValue[5],
	//HERO
	heroTitle: siteDataValue[7],
	heroDescription: siteDataValue[8],
	//FOOTER
	footerText: siteDataValue[10],
	footerLinkableText: siteDataValue[11],
	footerLinkableUrl: siteDataValue[12],
	//SEO
	seoTitle: siteDataValue[14] || defaultSiteData.seoTitle,
	seoDescription: siteDataValue[15] || defaultSiteData.seoDescription,
	seoBannerUrl: siteDataValue[16] || defaultSiteData.seoBannerUrl,
})
