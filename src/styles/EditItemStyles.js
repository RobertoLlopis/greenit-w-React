export const styles = (theme) => ({
	checkBox: {
		[theme.breakpoints.down('sm')]: { padding: '0.2em' }
	},
	itemText: {
		[theme.breakpoints.down('sm')]: { paddingRight: '40%' }
	},
	iconContainer: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: { width: 'fit-content', padding: '0.2em' }
	},
	icon: {
		paddingBottom: '0.2em',
		paddingRight: '0.8em',
		[theme.breakpoints.down('sm')]: { paddingRight: 0 }
	}
});
