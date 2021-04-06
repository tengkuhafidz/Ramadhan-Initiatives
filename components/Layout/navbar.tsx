import {useContext} from 'react'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Navbar() {
	const {
		navMenuText,
		navMenuUrl,
		navButtonText,
		navButtonUrl,
		logoUrl,
	} = useContext(SiteDataContext)

	return (
		<div className="flex">
			<div className="flex-grow">
				<div>
					<img
						src={logoUrl}
						alt="logo"
						width={40}
						height={40}
						className="inline-block"
					/>
				</div>
			</div>
			<div>
				<a
					href={navMenuUrl}
					className="text-gray-600 dark:text-gray-400 hover:underline"
					target="_blank"
				>
					{navMenuText}
				</a>
				<button
					className={`ml-4 md:ml-8 py-2 px-6 rounded-md text-white bg-green-600  hover:bg-green-700`}
				>
					<a href={navButtonUrl} target="_blank">
						<span>{navButtonText}</span>
					</a>
				</button>
			</div>
		</div>
	)
}
