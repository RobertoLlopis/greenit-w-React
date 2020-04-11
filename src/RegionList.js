import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { sort } from './AppHelpers';

export default function RegionList(props) {
	const { selection } = props;
	let regionFood = sort(selection, 'region');
	return (
		<div className="list-div">
			<span>
				<h3>Alimentos en tu comunidad</h3>
			</span>
			<List key="region" className="list">
				{regionFood.map((n, i) => (
					<span key={`region-${n}`}>
						<ListItem key={n}>
							<ListItemText primary={`${i + 1} ${n}`} />
						</ListItem>
						{i + 1 <= regionFood.length - 1 && <Divider />}
					</span>
				))}
			</List>
		</div>
	);
}
