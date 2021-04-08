import {Item} from '../../../../utils/constants'

interface Props {
	item: Item
	favouriteIds: number[]
	toggleFavourite: (id: number) => void
}

export default function Card({item, favouriteIds, toggleFavourite}: Props) {
	const {id, title, organisation, posterUrl, type, initiativeUrl} = item
	const isFavourite = favouriteIds.includes(id)

	return (
		<div>
			<div className="shadow-lg rounded-xl hover:shadow-xl">
				<img
					src={posterUrl}
					alt="initiative poster"
					className="object-cover object-top h-60 w-full rounded-t-xl"
				/>
				<div className="py-4 px-3">
					<figcaption className="font-medium">
						<div className="text-gray-500 text-sm flex">
							<div className="flex-grow">
								<span className="text-green-600 tracking-wider">
									{type.toUpperCase()}
								</span>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 cursor-pointer text-green-600 transform hover:scale-125"
									viewBox="0 0 20 20"
									fill={isFavourite ? 'currentColor' : 'none'}
									stroke="currentColor"
									onClick={() => toggleFavourite(id)}
								>
									<path
										fillRule="evenodd"
										d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div className="text-cyan-600 my-2">{title}</div>
						<p className="text-gray-500 font-light text-sm">
							By {organisation}
						</p>
					</figcaption>
					<div className="py-4 mt-2">
						<a
							href={initiativeUrl}
							target="_blank"
							className="bg-green-600 text-white py-3 px-4 rounded-full hover:bg-green-700"
						>
							View Source
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 inline-block ml-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
								<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
