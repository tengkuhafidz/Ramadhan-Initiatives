import {ALL, InitiativeType, Item} from './constants'

export const getDistinctFields = (items: Item[]) => {
	const distinctFields = []
	items.forEach(item => {
		if (item.tags) {
			item.tags.forEach(field => {
				!distinctFields.includes(field) && distinctFields.push(field)
			})
		}
	})

	return distinctFields.sort()
}

export const filterByType = (items: Item[], selectedTypeFilter: string, favouriteIds: number[]) => {
	switch (selectedTypeFilter) {
		case ALL:
			return items
		case InitiativeType.Favourite:
			return items.filter(item => favouriteIds.includes(item.id))
		default:
			return items.filter(item => item.type === selectedTypeFilter)
	}
}

export const filterByTag = (items: Item[], selectedTagsFilter: string) => {
	if (selectedTagsFilter === ALL) {
		return items
	}

	return items.filter(item => item.tags.includes(selectedTagsFilter))
}

export const filterItems = (
	items: Item[],
	selectedTypeFilter: string,
	selectedTagsFilter: string,
	favouriteIds: number[]
) => {
	const filteredByType = filterByType(items, selectedTypeFilter, favouriteIds)
	return filterByTag(filteredByType, selectedTagsFilter)
}
