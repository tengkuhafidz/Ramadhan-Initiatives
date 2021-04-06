import {useContext} from 'react'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Footer() {
	const {footerText, footerLinkableText, footerLinkableUrl} = useContext(
		SiteDataContext,
	)

	return (
		<div className="py-4 text-center text-gray-500 text-sm font-light">
			<p className="text-md">
				{footerText}{' '}
				<a
					href={footerLinkableUrl}
					target="_blank"
					className="hover:text-green-600 underline"
				>
					{footerLinkableText}
				</a>
			</p>
		</div>
	)
}
