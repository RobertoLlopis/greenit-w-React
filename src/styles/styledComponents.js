import React from 'react';
import { Checkbox, Icon, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const GreenCheckbox = withStyles({
	root: {
		color: '#37a82a',
		verticalAlign: 'unset'
	}
})((props) => <Checkbox color="default" {...props} />);
export const YellowIcon = withStyles({
	root: {
		color: '#ffcc00',
		paddingRight: '2px'
	}
})((props) => <Icon {...props} />);
export const GreenButton = withStyles({
	root: {
		color: 'white',
		backgroundColor: '#37a82a',
		'&:hover': {
			backgroundColor: '#15490d',
			border: '1px solid white'
		}
	}
})((props) => <Button color="default" {...props} />);
