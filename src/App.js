import React, { useState } from 'react';
import { withRouter, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { ProfileProvider } from './contexts/ProfileContext';

import Home from './Home';
import MyProfile from './MyProfile';

function App() {
	const [
		selection,
		setSelection
	] = useState({
		region: '',
		dieta: '',
		alergenos: [],
		temp: new Date().getMonth() + 1
	});

	return (
		<Switch>
			<Route exact path="/">
				<Home selection={selection} setSelection={setSelection} />
			</Route>
			<Route exact path="/myprofile">
				<ProfileProvider>
					<MyProfile selection={selection} />
				</ProfileProvider>
			</Route>
		</Switch>
	);
}

export default App;
