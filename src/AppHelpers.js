import { db1 } from './protodb';
/* currentTime = new Date();
    currentMonth = currentTime.getMonth() + 1;
    console.log(currentMonth); */
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
			});
	});
}
