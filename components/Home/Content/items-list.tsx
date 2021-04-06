import React from 'react'
import {Item} from '../../../utils/constants'
import Card from './item-types/card'

interface Props {
	items: Item[]
}

export default function ItemsList({items}: Props) {
	const renderItems = () => {
		return items.map(item => <Card item={item} key={item.id} />)
	}

	return (
		<div className="py-16 mb-8 grid gap-x-4 md:grid-cols-3">
			{renderItems()}
		</div>
	)
}
