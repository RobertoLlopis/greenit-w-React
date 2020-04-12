import React, { useContext, Fragment } from 'react';
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

import Navbar from './Navbar';
import { getSavedList, getRandomInt, sort } from './AppHelpers';

const styles = (theme) => ({
	root: { textAlign: 'center' },
	/* grid: { display: 'grid' }, */
	/* gridItem: {
		justifySelf: 'center'
	}, */
	card: {
		maxWidth: 345
	},
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

function MyProfile(props) {
	const { classes } = props;
	const savedList = getSavedList();
	return (
		<div className={classes.root}>
			<Navbar />
			<h1 style={{ textAlign: 'center' }}>Mi perfil</h1>
			<h3 style={{ textAlign: 'left', paddingLeft: '2rem' }}>
				Mis listas guardadas:
			</h3>
			<Grid
				container
				spacing={3}
				justify="center"
				alignContent="center"
				direction="row"
				className={classes.grid}
			>
				{savedList !== null ? (
					savedList.map((list) => {
						let time = list[0];
						return (
							<Grid
								item
								justify="center"
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
											image={require(`./mediaContent/foodImg/${getRandomInt(
												1,
												11
											)}.jpg`)}
											title="Recipe"
										/>
										<CardContent className={classes.content}>
											<Typography gutterBottom variant="h5" component="h2">
												{time}
											</Typography>
											<List
												key={`list-${time}`}
												className={classes.contentList}
											>
												{list[1].map((value, i) => {
													let sortedTemp = sort(list[2], 'temp');
													let sortedRegion = sort(list[2], 'region');
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
															{i + 1 <= list[1].length - 1 && <Divider />}
														</Fragment>
													);
												})}
											</List>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Share
										</Button>
										<Button size="small" color="primary">
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						);
					})
				) : (
					<h1>Subnormal incluye algo en el storage!</h1>
				)}
			</Grid>
		</div>
	);
}

export default withStyles(styles)(MyProfile);
/* lg='6' md='4' sm='2' xs='1'wrap='wrap' zeroMinWidth='true' */
