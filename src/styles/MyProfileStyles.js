export const styles = (theme) => ({
	root: {
		backgroundColor: '#2e6c09',
		backgroundImage:
			"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%232e6c09' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%232a680a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2327630b' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23245f0c' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23215a0d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%231d560d' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%231a520d' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23184d0d' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2315490d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2312450d' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2310400c' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230e3c0c' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230c380b' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a340a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23083009' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23072c07' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23072805' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23062403' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\")",
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		paddingBottom: '2rem',
		textAlign: 'center',
		minHeight: '95vh',
		width: 'inherit',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: { margin: 0 }
	},
	btn: {
		width: '70%',
		maxWidth: '200px',
		margin: '2rem auto'
	},
	link: {
		color: 'white',
		textDecoration: 'none'
	},
	emptyMsgContainer: {
		margin: 'auto',
		width: 'fit-content',
		maxWidth: '90vw',
		padding: '2.25rem 3rem',
		backgroundColor: 'white',
		borderRadious: '10px',
		[theme.breakpoints.down('xs')]: {
			padding: '1.5rem',
			width: 'auto',
			maxWidth: '100vw'
		}
	},
	grid: {
		width: '100% !important'
	}
});
