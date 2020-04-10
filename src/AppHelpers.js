import { db1 } from './protodb';
export function autoRegion(handleSelection) {
	window.addEventListener('load', () => {
		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const api = `${proxy}https://ipinfo.io/geo`;
		fetch(api)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				let idxOfData = db1.regiones.filter(
					(r) => data.region === Object.values(r)[0]
				);
				let arr = Object.values(idxOfData[0]);
				handleSelection(arr[0], 'region');
			})
			.catch((error) => {
				console.log(
					'Hay un error en la petición de la ubicación. Error: ' + error
				);
			});
	});
}
function changeRegionData(selectionRegion) {
	let dbRegion = '';
	switch (selectionRegion) {
		case 'Madrid':
			dbRegion = 'MA';
			break;
		case 'Cataluña':
			dbRegion = 'CA';
			break;
		case 'Castilla La Mancha':
			dbRegion = 'CLM';
			break;
		case 'Valencia':
			dbRegion = 'VLC';
			break;
		case 'Islas Baleares':
			dbRegion = 'BL';
			break;
		case 'Islas Canarias':
			dbRegion = 'CI';
			break;
		case 'Extremadura':
			dbRegion = 'EXT';
			break;
		case 'Murcia':
			dbRegion = 'MUR';
			break;
		case 'Andalucía':
			dbRegion = 'AND';
			break;
		case 'Castilla y León':
			dbRegion = 'CYL';
			break;
		case 'Principado de Asturias':
			dbRegion = 'AST';
			break;
		case 'Galicia':
			dbRegion = 'GAL';
			break;
		case 'Cantabria':
			dbRegion = 'CAN';
			break;
		case 'País Vasco':
			dbRegion = 'PV';
			break;
		case 'La Rioja':
			dbRegion = 'LR';
			break;
		case 'Aragón':
			dbRegion = 'ARG';
			break;
		case 'Navarra':
			dbRegion = 'NAV';
			break;
		case 'Ceuta':
			dbRegion = 'CEU';
			break;
		case 'Melilla':
			dbRegion = 'MEL';
			break;
		default:
			dbRegion = '';
			break;
	}
	return dbRegion;
}
export function sort(selection, formPart) {
	let foodIn = [];
	foodIn = db1.alimentos
		.filter((a) => a[formPart])
		.filter((a) =>
			a[formPart].includes(
				typeof selection[formPart] === 'string'
					? changeRegionData(selection[formPart])
					: selection[formPart]
			)
		);
	return foodIn.map((a) => a.nombre);
}
export function sortBool(dietaSet, alergSet) {
	let foodIn = db1.alimentos
		.filter(
			(a) =>
				dietaSet === 'ninguna'
					? Object.keys(a)
					: Object.keys(a).includes(dietaSet)
		)
		.filter((f) => !Object.keys(f).includes(alergSet[0]))
		.filter((f) => !Object.keys(f).includes(alergSet[1]))
		.filter((f) => !Object.keys(f).includes(alergSet[2]))
		.filter((f) => !Object.keys(f).includes(alergSet[3]))
		.filter((f) => !Object.keys(f).includes(alergSet[4]))
		.filter((f) => !Object.keys(f).includes(alergSet[5]));
	return foodIn.map((f) => f.nombre);
}
export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
