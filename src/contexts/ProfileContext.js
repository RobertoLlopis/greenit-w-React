import React, { createContext, useState } from 'react';

export const ProfileContext = createContext({});

export function ProfileProvider(props) {
	console.log(window.localStorage.getItem('savedList'));
	const [
		makingList,
		setMakingList
	] = useState(false);
	const [
		personalList,
		setPersonalList
	] = useState({
		savedList:
			window.localStorage.getItem('savedList') !== null &&
			JSON.parse(window.localStorage.getItem('savedList')),
		shoppingList: []
	});
	return (
		<ProfileContext.Provider
			value={[
				makingList,
				setMakingList,
				personalList,
				setPersonalList
			]}
		>
			{props.children}
		</ProfileContext.Provider>
	);
}
