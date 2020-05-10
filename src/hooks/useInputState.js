import { useState } from 'react';
import useToggleState from './useToggleState';

export default function useInputState(initialVal) {
	const [
		value,
		setValue
	] = useState(initialVal);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const reset = () => {
		setValue('');
	};
	return [
		value,
		handleChange,
		reset
	];
}
