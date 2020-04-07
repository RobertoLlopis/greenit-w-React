import React, { createContext, useState } from 'react';

export const ProfileContext = createContext({});

export function ProfileProvider(props) {
	const [
		makingList,
		setMakingList
	] = useState(false);
	const [
		personalList,
		setPersonalList
	] = useState({ shoppingList: [] });
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
