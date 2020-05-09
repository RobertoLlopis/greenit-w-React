export const styles = (theme) => ({
	root: {
		margin: '0 auto',
		width: 'fit-content',
		maxWidth: '90vw',
		padding: '2rem 3rem 1.5rem',
		[theme.breakpoints.down('xs')]: {
			padding: '1.5rem',
			width: 'auto',
			margin: '0',
			maxWidth: '100vw'
		}
	},
	editingList: {
		minWidth: window.innerWidth / 2,
		overflowWrap: 'normal',
		[theme.breakpoints.down('sm')]: { width: '100%', paddingRight: 0 }
	},
	btnContainer: {
		margin: 'auto',
		paddingTop: '2rem',
		width: '40%',
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down('xs')]: { width: '85%' }
	}
});
