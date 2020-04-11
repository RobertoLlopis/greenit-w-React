import React, { useContext, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

import { getSavedList, getRandomInt, sort } from './AppHelpers';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	}
});
const YellowIcon = withStyles({
	root: {
		color: '#ffcc00',
		paddingRight: '2px'
	}
})((props) => <Icon {...props} />);

export default function MyProfile(props) {
	const classes = useStyles();
	const savedList = getSavedList();
	return (
		<div>
			<h1>Mi perfil</h1>
			<h3 style={{ textAlign: 'left' }}>Mis listas guardadas:</h3>
			<Grid
				container
				spacing={3}
				justify="center"
				alignContent="center"
				direction="row"
			>
				{savedList !== null ? (
					savedList.map((list) => {
						console.log(list[0]);
						let time = list[0];
						return (
							<Grid item key={`grid-${time}`} xs={12} sm={6} md={4} lg={3}>
								<Card className={classes.root}>
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
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{time}
											</Typography>
											<List key={`list-${time}`} className="">
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
/* lg='6' md='4' sm='2' xs='1'wrap='wrap' zeroMinWidth='true' */
