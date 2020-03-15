import { useState } from 'react';

import { db2 } from '../protodb';

/* /^w/ */
/* /_+/ */
export default function useFormDisplay(formPart) {
	let result = { [formPart]: [] };

	const [
		state,
		setState
	] = useState(() => {
		db2[formPart].map((value) => {
			result[formPart].push(value);
			result[value] = false;
			return result;
		});
		return result;
	});
	return [
		state,
		setState
	];
}
