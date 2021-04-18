import {defaultSiteData, Item, SiteData} from '../utils/constants'

export const toLowercase = (value: string) => value?.toLowerCase()
const stringToBoolean = (value: string) => value === 'TRUE'
const stringToArray = (value: string) =>
	value?.split(',').map(value => value.trim())
const defaultToNull = (value: string) => (value ? value : null)

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues
		.map((itemValue, index) => ({
			id: index,
			title: itemValue[0],
			organisation: itemValue[1],
			type: itemValue[2],
			tags: stringToArray(itemValue[3]),
			posterUrl: itemValue[4],
			initiativeUrl: itemValue[5],
			isActive: stringToBoolean(itemValue[6]),
		}))
		.reverse()
}

export const transformSiteData = (siteDataValue: any[]): SiteData => ({
	// NAVBAR
	logoUrl: siteDataValue[1] || defaultSiteData.logoUrl,
	navButtonText: defaultToNull(siteDataValue[2]),
	navButtonUrl: defaultToNull(siteDataValue[3]),
	navMenuText: defaultToNull(siteDataValue[4]),
	navMenuUrl: defaultToNull(siteDataValue[5]),
	//HERO
	heroTitle: defaultToNull(siteDataValue[7]),
	heroDescription: defaultToNull(siteDataValue[8]),
	//FOOTER
	footerText: defaultToNull(siteDataValue[10]),
	footerLinkableText: defaultToNull(siteDataValue[11]),
	footerLinkableUrl: defaultToNull(siteDataValue[12]),
	//SEO
	seoTitle: siteDataValue[14] || defaultSiteData.seoTitle,
	seoDescription: siteDataValue[15] || defaultSiteData.seoDescription,
	seoBannerUrl: siteDataValue[16] || defaultSiteData.seoBannerUrl,
	//ANNOUNCEMENT BAR
	announcementMessage: defaultToNull(siteDataValue[18]),
	announcementDestinationUrl: defaultToNull(siteDataValue[19]),
})
