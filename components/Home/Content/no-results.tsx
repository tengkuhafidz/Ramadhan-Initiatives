import {ALL} from '../../../utils/constants'

interface Props {
	searchTerm: string
	selectedTypeFilter: string
	selectedTagsFilter: string
}

export default function NoResults({
	searchTerm,
	selectedTypeFilter,
	selectedTagsFilter,
}: Props) {
	const searchTermFilterMessage = !searchTerm ? (
		<></>
	) : (
		<span>
			{' '}
			for <span className="font-light underline">"{searchTerm}"</span>
		</span>
	)

	const typeFilterMessage =
		selectedTypeFilter === ALL ? (
			<></>
		) : (
			<span>
				{' '}
				under <span className="font-light underline">{selectedTypeFilter}</span>
			</span>
		)

	const fieldFilterMessage =
		selectedTagsFilter === ALL ? (
			<></>
		) : (
			<span>
				{' '}
				with the{' '}
				<span className="font-light underline">{selectedTagsFilter}</span> tag
			</span>
		)

	return (
		<div className="max-w-2xl bg-gray-100 px-2 mt-8 mb-12 py-6 rounded-xl mx-auto text-center">
			<p className="text-gray-500 font-semibold">
				No initiatives found {searchTermFilterMessage}
				{typeFilterMessage}
				{fieldFilterMessage}.
			</p>
		</div>
	)
}
