import { Dispatch, SetStateAction, useState } from 'react'
import { ALL, Item } from '../../../../utils/constants'
import { getDistinctFields } from '../../../../utils/filter'
import FilterOptions from './filter-options'

interface Props {
	items: Item[]
	selectedTag: string
	setSelectedTag: Dispatch<SetStateAction<string>>
}

export default function AdvancedFilter({
	items,
	selectedTag,
	setSelectedTag,
}: Props) {
	const [showFilterOptions, setShowFilterOptions] = useState(false)

	const distinctFields = getDistinctFields(items)

	const clearFilter = () => {
		setSelectedTag(ALL)
		setShowFilterOptions(false)
	}

	if (!showFilterOptions) {
		return (
			<p
				className="text-gray-500 text-sm underline cursor-pointer"
				onClick={() => setShowFilterOptions(true)}
			>
				Advanced Filter
			</p>
		)
	}

	return (
		<div>
			<p
				className="text-gray-500 text-sm underline cursor-pointer"
				onClick={clearFilter}
			>
				[Clear]
			</p>
			<FilterOptions
				options={distinctFields}
				selectedFilter={selectedTag}
				setSelectedFilter={setSelectedTag}
			/>
		</div>
	)
}
