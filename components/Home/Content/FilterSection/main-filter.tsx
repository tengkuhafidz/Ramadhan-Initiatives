import {Dispatch, SetStateAction} from 'react'
import {ALL, InitiativeType} from '../../../../utils/constants'
import FilterOptions from './filter-options'

interface Props {
	setSelectedTag: Dispatch<SetStateAction<string>>
	selectedType: string
	setSelectedType: Dispatch<SetStateAction<string>>
}

export default function MainFilter({
	selectedType,
	setSelectedType,
	setSelectedTag,
}: Props) {
	const allTypes = [
		InitiativeType.Favourite,
		InitiativeType.Donation,
		InitiativeType.Participation,
		InitiativeType.Resource,
		InitiativeType.Talk
	]

	const setSelectedTypeAndResetSelectedTag = (type: string) => {
		setSelectedType(type)
		if (type !== ALL) {
			setSelectedTag(ALL)
		}
	}

	return (
		<div className="py-2">
			<FilterOptions
				options={allTypes}
				selectedFilter={selectedType}
				setSelectedFilter={setSelectedTypeAndResetSelectedTag}
			/>
		</div>
	)
}
