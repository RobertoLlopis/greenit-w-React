export const styles = (theme) => ({
	card: {
		maxWidth: 345,
		[theme.breakpoints.down('sm')]: {
			marginLeft: '1rem'
		}
	},
	bottomArea: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0.5rem',
		alignContent: 'center'
	},
	btns: {},
	contentList: {
		overflowY: 'scroll',
		maxHeight: 450,
		[theme.breakpoints.down('sm')]: { maxHeight: 275 }
	}
});
