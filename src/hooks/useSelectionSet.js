const regExpUnder = /\s/g;
export default function useSelectionSet(selection, formPart) {
	let set = selection[formPart];
	let selectionSet;
	if (formPart === 'alergenos' && set !== '') {
		selectionSet = set.map((a) => a.toLowerCase().replace(regExpUnder, '_'));
	}
	else if (formPart === 'dieta') {
		selectionSet = set.replace(regExpUnder, '_').toLowerCase();
	}
	else {
		console.log('no pilla nasa');
	}
	return selectionSet;
}
