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

import ListHeader from './ListHeader';
import { YellowIcon } from '../../styles/styledComponents';
import { styles } from '../../styles/ProfileCardStyles';
import { sort } from '../../AppHelpers';

function ProfileCard(props) {
	const { list, handleDelete, changeToEdit, classes } = props;
	let id = list[0];
	let time = list[1];
	let foodArr = list[2];
	let selection = list[3];
	let imgNumber = list[4];
	let done = list[5];
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
			<Card className={classes.card}>
				<CardActionArea onClick={() => changeToEdit(list)}>
					<CardMedia
						component="img"
						alt="RandomFoodImg"
						height="140"
						image={require(`../../mediaContent/foodImg/${imgNumber}.jpg`)}
						title="Recipe"
					/>
					<CardContent className={classes.content}>
						<ListHeader listState={{ time, selection }} editing={false} />
						<List key={`list-${id}`} className={classes.contentList}>
							{foodArr.map((item, i) => {
								let sortedTemp = sort(selection, 'temp');
								let sortedRegion = sort(selection, 'region');
								return (
									<Fragment key={`${id}-${item}`}>
										<ListItem key={item}>
											<ListItemText
												primary={`${item}`}
												style={{
													textDecoration: done.includes(item)
														? 'line-through'
														: 'none'
												}}
											/>
											<ListItemSecondaryAction>
												{sortedRegion.includes(item) && (
													<YellowIcon>
														<NearMeIcon />
													</YellowIcon>
												)}
												{sortedTemp.includes(item) && (
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
						onClick={() => changeToEdit(list)}
					>
						Editar
					</Button>
					<Button
						size="small"
						variant="outlined"
						color="secondary"
						className={classes.btns}
						onClick={() => handleDelete(id)}
					>
						Eliminar
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default withStyles(styles)(ProfileCard);
