import React from 'react';

import { ProfileProvider } from '../../contexts/ProfileContext';
import { autoRegion } from '../../AppHelpers';

import PageContent from '../common/PageContent';
import Navbar from '../common/Navbar';
import Form from './Form';
import ResultList from './ResultList';
import ShoppingListButtoms from './ShoppingListButtoms';
import WelcomeSection from './WelcomeSection';
import '../../styles/Home.css';

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
				<WelcomeSection />
				<Form selection={selection} handleSelection={handleSelection} />
				<ResultList selection={selection} />
				<ShoppingListButtoms selection={selection} />
			</PageContent>
		</ProfileProvider>
	);
}
