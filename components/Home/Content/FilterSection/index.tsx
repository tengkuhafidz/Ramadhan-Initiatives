import {Dispatch, SetStateAction, useState} from 'react'
import {ALL, InitiativeType, Item} from '../../../../utils/constants'
import {getDistinctFields} from '../../../../utils/filter'
import FilterOptions from './filter-options'

interface Props {
	items: Item[]
	selectedTag: string
	setSelectedTag: Dispatch<SetStateAction<string>>
	selectedType: string
	setSelectedType: Dispatch<SetStateAction<string>>
}

export default function FilterSection({
	items,
	selectedTag,
	setSelectedTag,
	selectedType,
	setSelectedType,
}: Props) {
	const [showFilterOptions, setShowFilterOptions] = useState(false)

	const distinctFields = getDistinctFields(items)

	const allTypes = [InitiativeType.Donation, InitiativeType.Participation]

	const setSelectedTypeAndResetSelectedTag = (type: string) => {
		setSelectedType(type)
		if (type !== ALL) {
			setSelectedTag(ALL)
		}
	}

	const clearFilter = () => {
		setSelectedType(ALL)
		setSelectedTag(ALL)
		setShowFilterOptions(false)
	}

	if (!showFilterOptions) {
		return (
			<p
				className="text-gray-500 text-sm mt-4 underline cursor-pointer"
				onClick={() => setShowFilterOptions(true)}
			>
				Advanced Filter
			</p>
		)
	}

	return (
		<div>
			<p
				className="text-gray-500 text-sm mt-2 underline cursor-pointer"
				onClick={clearFilter}
			>
				[Clear Filter]
			</p>
			<FilterOptions
				title="Type"
				options={allTypes}
				selectedFilter={selectedType}
				setSelectedFilter={setSelectedTypeAndResetSelectedTag}
			/>
			<FilterOptions
				title="Tag"
				options={distinctFields}
				selectedFilter={selectedTag}
				setSelectedFilter={setSelectedTag}
			/>
		</div>
	)
}
