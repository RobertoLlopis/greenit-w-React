import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Typography } from '@material-ui/core/';

import '../../styles/WelcomeSection.css';
import portada from '../../mediaContent/portada.png';
import portadaMovil from '../../mediaContent/portadaMovil.png';

function WelcomeSection() {
	let titlebar = window.innerWidth >= 400 ? portada : portadaMovil;
	const slides = [
		{
			title: '¿Qué es?',
			description:
				'Green It es una sencilla aplicación que te ayuda a hacer listas de la compra sostenibles basado en tus preferencias dietéticas, los productos de temporada y cultivados en tu zona.'
		},
		{
			title: '¿Cómo funciona?',
			description:
				'Basándose en tu ubicación y momento del año, creamos una lista personalizada de alimentos contando también con tu dieta y posibles alérgenos.'
		},
		{
			title: '¿Por qué es sostenible?',
			description:
				'Los alimentos cuanta menos distancia recorren del huerto a tu mesa menos recursos consumen tanto de hidrocarburos, como conservantes y químicos entre otros menos evidentes como pueden ser envases más contaminantes.'
		},
		{
			title: '¿Qué eliges?',
			description:
				'Si en tu elección y lista de la compra das preferencia a los productos locales y de temporada estarás minimizando el impacto medioambiental de tu consumo. ¿Te animas?'
		},
		{
			title: '¿A qué esperas?',
			description:
				'A partir del resultado podrás elaborar y guardar en tu perfil una lista de la compra que consultar y modificar según la vayas cumpliendo o actualizando. '
		}
	];

	return (
		<section className="welcome-root">
			<div className="header-container">
				<img alt="portada greenit" src={titlebar} className="header-img" />
			</div>
			<div className="welcome-title">
				<Typography
					component="h1"
					variant="h2"
					gutterBottom
					className="welcome-header"
				>
					Bienvenido a Green It
				</Typography>
				<Typography component="h2" variant="h5" gutterBottom>
					Te ayudamos a hacer compras personalizadas y sostenibles
				</Typography>
			</div>
			<Slider>
				{slides.map((slide, i) => (
					<div key={i} className="slide-div">
						<div className="inner-slide-div">
							<Typography
								component="h3"
								variant="h5"
								gutterBottom
								className="inner-slide-h3"
							>
								{slide.title}
							</Typography>
							<Typography
								component="div"
								variant="body2"
								className="inner-slide-p"
							>
								{slide.description}
							</Typography>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
}
export default WelcomeSection;
