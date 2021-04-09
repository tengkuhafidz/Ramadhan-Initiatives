module.exports = {
	async redirects() {
		return [
			{
				source: '/edit',
				destination:
					'https://docs.google.com/spreadsheets/d/1zBl624q9s6qoyyodI9DrodUQkCox2utoIQADBToz6jU/edit#gid=0',
				permanent: false,
			},
		]
	},
}
