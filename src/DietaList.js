import React, { useContext, Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, Icon } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NearMeIcon from '@material-ui/icons/NearMe';

import { GreenCheckbox, YellowIcon } from './styles/styledComponents';
import { ProfileContext } from './contexts/ProfileContext';
import { sortBool, sort } from './AppHelpers';
import useSelectionSet from './hooks/useSelectionSet';

export default function DietaList(props) {
	const { selection } = props;
	const [
		makingList,
		setMakingList,
		personalList,
		setPersonalList
	] = useContext(ProfileContext);
	const { shoppingList } = personalList;
	let tempFood = sort(selection, 'temp');
	let regionFood = sort(selection, 'region');
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
				...personalList,
				shoppingList: shoppingList.filter((f) => f !== name)
			});
		}
	};
	return (
		<div className={makingList ? 'div-shoppingList' : 'list-div'}>
			{!makingList ? (
				<Fragment>
					<span className="list-header">
						<h3>En base a tu dieta y alérgenos</h3>{' '}
					</span>
					<List key="dieta" className="list">
						{dietaFood.map((n, i) => (
							<span key={n}>
								<ListItem key={`${n}-noMaking-listItem`}>
									<ListItemText primary={`${i + 1} ${n}`} />
								</ListItem>
								{i + 1 <= dietaFood.length - 1 && <Divider />}
							</span>
						))}
					</List>
				</Fragment>
			) : (
				<Fragment>
					<List key="dieta" className="list-shopping">
						{dietaFood.slice(0, dietaFood.length / 2).map((n, i) => (
							<Fragment key={`${n}-listItem-1stPart`}>
								<ListItem key={n}>
									<ListItemText
										primary={`${n}`}
										className="itemText-shopping"
									/>
									{makingList && (
										<ListItemSecondaryAction>
											{regionFood.includes(n) && (
												<YellowIcon>
													<NearMeIcon />
												</YellowIcon>
											)}
											{tempFood.includes(n) && (
												<Icon color="primary">
													<EventAvailableIcon />
												</Icon>
											)}
											<GreenCheckbox onChange={handleChange(n)} />
										</ListItemSecondaryAction>
									)}
								</ListItem>
								{i + 1 <= dietaFood.length - 1 && <Divider />}
							</Fragment>
						))}
					</List>
					<List key="dieta2" className="list-shopping">
						{dietaFood
							.slice(dietaFood.length / 2, dietaFood.length)
							.map((n, i) => (
								<Fragment key={`${n}-listItem-2ndPart`}>
									<ListItem key={n}>
										<ListItemText
											primary={`${n}`}
											className="itemText-shopping"
										/>
										{makingList && (
											<ListItemSecondaryAction>
												{regionFood.includes(n) && (
													<YellowIcon>
														<NearMeIcon />
													</YellowIcon>
												)}
												{tempFood.includes(n) && (
													<Icon color="primary">
														<EventAvailableIcon />
													</Icon>
												)}
												<GreenCheckbox onChange={handleChange(n)} />
											</ListItemSecondaryAction>
										)}
									</ListItem>
									{i + 1 <= dietaFood.length - 1 && <Divider />}
								</Fragment>
							))}
					</List>
				</Fragment>
			)}
		</div>
	);
}
