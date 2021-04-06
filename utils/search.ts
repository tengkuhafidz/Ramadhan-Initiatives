import Fuse from 'fuse.js'
import {Item} from './constants'

export const getFuseSearchResult = (
	items: Item[],
	searchTerm: string,
): Item[] => {
	const options = {
		isCaseSensitive: false,
		findAllMatches: false,
		includeMatches: false,
		includeScore: false,
		useExtendedSearch: false,
		minMatchCharLength: 1,
		shouldSort: true,
		threshold: 0.4,
		location: 0,
		distance: 100,
		keys: ['title', 'organisation'],
	}

	const fuse = new Fuse(items, options)
	const fuseSearchResult = fuse.search(searchTerm)
	return fuseSearchResult.map(result => result.item)
}
