import { Item } from "./constants"

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
