import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
	root: {
		width: '100%',
		height: 400,
		backgroundColor: '#FFFF',
		marginTop: '2rem',
		position: 'absolute',
		maxHeight: 300,
		whiteSpace: 'nowrap',
		overflowY: 'scroll',
		textOverflow: 'ellipsis',
		display: 'flex',
		justifyContent: 'center',
		border: '2px solid grey'
	},
};

export default withStyles(styles)(function ResultList(props) {
	const { classes} = props;
	const twe = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	];
	
	
	/* let ChosenDietas = db1.alimentos.filter(a => a.dieta === selection.dieta && true) */
	return (
		<div className={classes.root}>
			<span >
				<List>
					{twe.map((n, i) => (
						<>
							<ListItem >
								<ListItemText primary={`Jodete x ${i}`} />
							</ListItem>
							{i + 1 <= twe.length - 1 && <Divider />}
						</>
					))}
				</List>
			</span>
		</div>
	);
});
