import { Dispatch, SetStateAction } from 'react'
import { Item } from '../../../../utils/constants'
import { filterByType } from '../../../../utils/filter'
import AdvancedFilter from './advanced-filter'
import MainFilter from './main-filter'

interface Props {
	items: Item[]
	selectedTag: string
	setSelectedTag: Dispatch<SetStateAction<string>>
	selectedType: string
	setSelectedType: Dispatch<SetStateAction<string>>
	favouriteIds: number[]
}

export default function FilterSection({
	items,
	selectedTag,
	setSelectedTag,
	selectedType,
	setSelectedType,
	favouriteIds
}: Props) {

	const itemsByType = filterByType(items, selectedType, favouriteIds)

	return (
		<div>
			<MainFilter
				selectedType={selectedType}
				setSelectedType={setSelectedType}
				setSelectedTag={setSelectedTag}
			/>
			<AdvancedFilter
				items={itemsByType}
				selectedTag={selectedTag}
				setSelectedTag={setSelectedTag}
			/>
		</div>
	)
}
