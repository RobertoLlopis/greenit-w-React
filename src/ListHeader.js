import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NearMeIcon from '@material-ui/icons/NearMe';

import { YellowIcon } from './styles/styledComponents';
import { months } from './AppHelpers';

const styles = (theme) => ({
	/* gridItem: {
		justifySelf: 'center'
    }, */
	titleContainer: {
		padding: '0.5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconsArea: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconGourp: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		padding: '0.5rem'
	}
});

export default withStyles(styles)(function ListHeader(props) {
	const { listState, editing, classes } = props;
	const { time, selection } = listState;
	return (
		<div className={classes.titleContainer}>
			{editing === true && (
				<Typography variant="h6" component="h2">
					Editando la lista realizada el
				</Typography>
			)}
			<Typography gutterBottom variant="overline" component="h2">
				{time}
			</Typography>
			<div className={classes.iconsArea}>
				<div className={classes.iconGourp}>
					<YellowIcon>
						<NearMeIcon />
					</YellowIcon>
					{<Typography variant="caption">{selection.region}</Typography>}
				</div>
				<div className={classes.iconGourp}>
					<Icon color="primary">
						<EventAvailableIcon />
					</Icon>
					{<Typography variant="caption">{months[selection.temp]}</Typography>}
				</div>
			</div>
		</div>
	);
});
