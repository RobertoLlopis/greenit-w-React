import React from 'react';

import { ProfileProvider } from './contexts/ProfileContext';
import { autoRegion } from './AppHelpers';

import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';
import ResultList from './ResultList';
import ShoppingListButtoms from './ShoppingListButtoms';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const { selection, setSelection } = props;

	function handleSelection(chosen, formPart) {
		setSelection({ ...selection, [formPart]: chosen });
	}
	autoRegion(handleSelection);

	return (
		<ProfileProvider>
			<PageContent>
				<Navbar />
				<Form selection={selection} handleSelection={handleSelection} />
				<ResultList selection={selection} />
				<ShoppingListButtoms selection={selection} />
				<Link to="/myprofile">Click Here</Link>
			</PageContent>
		</ProfileProvider>
	);
}
