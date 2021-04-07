import React, {useState} from 'react'
import {ALL, Item} from '../../../utils/constants'
import {filterItems} from '../../../utils/filter'
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
	const [favouriteIds, setFavouriteIds] = useState([])

	const removeIdFromFavs = (id: number) =>
		favouriteIds.filter(favId => favId !== id)
	const addIdToFavs = (id: number) => [id, ...favouriteIds]

	const toggleFavourite = (id: number) => {
		let updatedItemsList
		if (favouriteIds.includes(id)) {
			updatedItemsList = removeIdFromFavs(id)
		} else {
			updatedItemsList = addIdToFavs(id)
		}

		setFavouriteIds(updatedItemsList)
	}

	const searchResults = searchTerm
		? getFuseSearchResult(items, searchTerm)
		: items

	const filteredItems = filterItems(
		searchResults,
		selectedTypeFilter,
		selectedTagsFilter,
		favouriteIds,
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
		return (
			<ItemsList
				items={filteredItems}
				favouriteIds={favouriteIds}
				toggleFavourite={toggleFavourite}
			/>
		)
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
