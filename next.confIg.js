module.exports = {
	async redirects() {
		return [
			{
				source: '/edit',
				destination:
					'https://docs.google.com/spreadsheets/d/1jEN44FgWwwY7_87w_EyHCm2Fz169zNyb7m54443S17M/edit#gid=0',
				permanent: true,
			},
		]
	},
}
