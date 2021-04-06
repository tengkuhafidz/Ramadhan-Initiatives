import {ALL} from '../../../../utils/constants'

interface Props {
	title: string
	options: string[]
	selectedFilter: string
	setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterOptions({
	title,
	options,
	selectedFilter,
	setSelectedFilter,
}: Props) {
	const renderOptions = () => {
		const allOptions = [ALL, ...options]
		return allOptions.map(option => (
			<span
				onClick={() => setSelectedFilter(option)}
				className={`py-1 px-3 inline-block text-sm  m-1 cursor-pointer  ${
					option === selectedFilter
						? 'bg-green-600 hover:bg-green-700 text-gray-100'
						: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
				}`}
			>
				{option}
			</span>
		))
	}

	return (
		<div className="py-2">
			<h3 className="text-sm font-semibold">{title}</h3>
			{renderOptions()}
		</div>
	)
}
