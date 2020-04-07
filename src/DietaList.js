import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, Checkbox } from '@material-ui/core';

import { ProfileContext } from './contexts/ProfileContext';

import { sortBool } from './AppHelpers';
import useSelectionSet from './hooks/useSelectionSet';

const GreenCheckbox = withStyles({
	root: {
		color: '#37a82a',
		'&$checked': {
			color: 'green'[600]
		}
	}
})((props) => <Checkbox color="default" {...props} />);

export default function DietaList(props) {
	const { selection, makingList } = props;
	const [
		personalList,
		setPersonalList
	] = useContext(ProfileContext);
	const { shoppingList } = personalList;
	let setDieta = useSelectionSet(selection, 'dieta');
	let setAlerg = useSelectionSet(selection, 'alergenos');
	let dietaFood = sortBool(setDieta, setAlerg);

	const handleChange = (name) => (event) => {
		/* personalList[name] ? console.log("Ya lo elegiste por otro lado") : */
		if (event.target.checked) {
			shoppingList.push(name);
			setPersonalList({
				...personalList,
				shoppingList: shoppingList
			});
		}
		else {
			setPersonalList({
				shoppingList: shoppingList.filter((f) => f !== name)
			});
		}
	};

	return (
		<div className={makingList ? 'div-shoppingList':"list-div"}>
            {!makingList ? 
			(<>
            <span className="list-header">
				<h3>En base a tu dieta y alérgenos</h3>{' '}
			</span>
			<List key="dieta" className="list">
				{dietaFood.map((n, i) => (
					<span>
						<ListItem key={n}>
							<ListItemText primary={`${i + 1} ${n}`} />
						</ListItem>
						{i + 1 <= dietaFood.length - 1 && <Divider />}
					</span>
				))}
			</List>
            </>
				)
            :
            <>
            <List key="dieta" className="list-shopping">
            {dietaFood.slice(0, dietaFood.length/2).map((n, i) => (
                    <>
						<ListItem key={n}>
							<ListItemText primary={`${dietaFood.indexOf(n) + 1} ${n}`} />
							{makingList && (
								<ListItemSecondaryAction
									children={
										
											<GreenCheckbox onChange={handleChange(n)} />
										
									}
								/>
							)}
						</ListItem>
						{i + 1 <= dietaFood.length - 1 && <Divider />}
                    </>
                    
				))}
                </List>
                <List key="dieta2" className="list-shopping">
                {dietaFood.slice(dietaFood.length/2, dietaFood.length).map((n, i) => (
					<>
						<ListItem key={n}>
							<ListItemText primary={`${dietaFood.indexOf(n)+ 1} ${n}`} />
							{makingList && (
								<ListItemSecondaryAction
									children={
										
											<GreenCheckbox onChange={handleChange(n)} />
									}
								/>
							)}
						</ListItem>
						{i + 1 <= dietaFood.length - 1 && <Divider />}
                     </>   
				))}
                </List>
			
            
			
            </>
}</div>
	);
}
