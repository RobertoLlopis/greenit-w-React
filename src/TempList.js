import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { sort } from './AppHelpers';

export default function TempList(props) {
	const { selection } = props;
	let tempFood = sort(selection, 'temp');
	return (
		<div className="list-div">
			<span className="list-header">
				<h3>Alimentos de temporada</h3>
			</span>
			<List key="temp" className="list">
				{tempFood.map((n, i) => (
					<span key={`temp-${n}`}>
						<ListItem key={n}>
							<ListItemText primary={`${i + 1} ${n}`} />
						</ListItem>
						{i + 1 <= tempFood.length - 1 && <Divider />}
					</span>
				))}
			</List>
		</div>
	);
}
