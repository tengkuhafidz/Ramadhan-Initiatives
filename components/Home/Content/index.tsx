import React, {useState} from 'react'
import {ALL, Item} from '../../../utils/constants'
import {getFuseSearchResult} from '../../../utils/search'
import FilterSection from './FilterSection'
import ItemsList from './items-list'
import NoResults from './no-results'
import Searchbar from './searchbar'

interface Props {
	items: Item[]
}

export default function Content({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedTypeFilter, selectedTagFilter] = useState(ALL)
	const [selectedTagsFilter, selectedTagsFiltersFilter] = useState(ALL)

	const searchResults = searchTerm
		? getFuseSearchResult(items, searchTerm)
		: items

	const filteredItems = searchResults.filter(
		item =>
			(selectedTypeFilter === ALL || item.type === selectedTypeFilter) &&
			(selectedTagsFilter === ALL || item.tags.includes(selectedTagsFilter)),
	)

	const renderItemsList = () => {
		if (filteredItems.length < 1) {
			return (
				<NoResults
					searchTerm={searchTerm}
					selectedTypeFilter={selectedTypeFilter}
					selectedTagsFilter={selectedTagsFilter}
				/>
			)
		}
		return <ItemsList items={filteredItems} />
	}

	return (
		<div>
			<div className="text-center max-w-xl mx-auto py-2">
				<Searchbar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					selectedTagsFiltersFilter={selectedTagsFiltersFilter}
				/>
				<FilterSection
					items={filteredItems}
					selectedTag={selectedTagsFilter}
					setSelectedTag={selectedTagsFiltersFilter}
					selectedType={selectedTypeFilter}
					setSelectedType={selectedTagFilter}
				/>
			</div>
			{renderItemsList()}
		</div>
	)
}
