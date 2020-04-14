import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, Icon } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NearMeIcon from '@material-ui/icons/NearMe';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { sort, months } from './AppHelpers';

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
	},
	btns: {},
	contentList: {
		overflowY: 'scroll',
		maxHeight: 350,
		[theme.breakpoints.down('sm')]: { maxHeight: 275 }
	}
});
const YellowIcon = withStyles({
	root: {
		color: '#ffcc00',
		paddingRight: '2px'
	}
})((props) => <Icon {...props} />);

function ProfileCard(props) {
	const { list, handleDelete, classes } = props;
	let time = list[0];
	let foodArr = list[1];
	let selection = list[2];
	let imgNumber = list[3];
	console.log(selection.region.length);
	return (
		<Grid
			item
			key={`grid-${time}`}
			xs={12}
			sm={6}
			md={4}
			lg={3}
			className={classes.gridItem}
		>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="RandomFoodImg"
						height="140"
						image={require(`./mediaContent/foodImg/${imgNumber}.jpg`)}
						title="Recipe"
					/>
					<CardContent className={classes.content}>
						<div className={classes.titleContainer}>
							<Typography gutterBottom variant="overline" component="h2">
								{time}
							</Typography>
							<div className={classes.iconsArea}>
								<span className={classes.iconGourp}>
									<YellowIcon>
										<NearMeIcon />
									</YellowIcon>
									{
										<Typography variant="caption" component="body">
											{selection.region}
										</Typography>
									}
								</span>
								<span className={classes.iconGourp}>
									<Icon color="primary">
										<EventAvailableIcon />
									</Icon>
									{
										<Typography variant="caption" component="body">
											{months[selection.temp]}
										</Typography>
									}
								</span>
							</div>
						</div>
						<List key={`list-${time}`} className={classes.contentList}>
							{foodArr.map((value, i) => {
								let sortedTemp = sort(selection, 'temp');
								let sortedRegion = sort(selection, 'region');
								return (
									<Fragment key={`${time}-${value}`}>
										<ListItem key={value}>
											<ListItemText primary={`${value}`} />
											<ListItemSecondaryAction>
												{sortedRegion.includes(value) && (
													<YellowIcon>
														<NearMeIcon />
													</YellowIcon>
												)}
												{sortedTemp.includes(value) && (
													<Icon color="primary">
														<EventAvailableIcon />
													</Icon>
												)}
											</ListItemSecondaryAction>
										</ListItem>
										{i + 1 <= foodArr.length - 1 && <Divider />}
									</Fragment>
								);
							})}
						</List>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.bottomArea}>
					<Button
						size="small"
						variant="outlined"
						color="primary"
						className={classes.btns}
					>
						Editar
					</Button>
					<Button
						size="small"
						variant="outlined"
						color="secondary"
						className={classes.btns}
						onClick={() => handleDelete(time)}
					>
						Eliminar
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default withStyles(styles)(ProfileCard);
