export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://docs.google.com/forms/d/1qc29SafinC09L0wrPLDeOab_ouUThEa-gipSySFeYC0/edit`,
			permanent: false,
		},
	}
}
