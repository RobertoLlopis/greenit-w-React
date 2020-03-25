const regExpFirst = /\w/;
const regExpUnder = /_/g;

export const db1 = {
	alergenos: [
		'marisco',
		'huevo',
		'pescado',
		'cacahuete',
		'lacteos',
		'frutos_secos'
	],
	dietas: [
		'vegetariana',
		'vegana',
		'mediterranea',
		'paleo',
		'rica_en_fibra',
		'fitness',
		'alcalina',
		'cetogenica',
		'macrobiotica',
		'proteica',
		'diabetes',
		'ninguna'
	],
	alimentos: [
		{
			nombre: 'Aceite de girasol',
			vegetariana: true,
			vegana: true,
			fitness: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true
		},
		{
			nombre: 'Aceite de Oliva',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			fitness: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'EXT',
				'CLM'
			]
		},
		{
			nombre: 'Acelga',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'NAV',
				'VLC'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Aguacate',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			region: [
				'AND'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Ajo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'CLM'
			],
			temp: [
				5,
				6,
				7
			]
		},
		{
			nombre: 'Albaricoque',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'MUR',
				'VLC',
				'ARG'
			],
			temp: [
				5,
				6,
				7,
				8
			]
		},
		{
			nombre: 'Alcachofa',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'MUR',
				'VLC',
				'NAV'
			],
			temp: [
				3,
				4,
				5,
				6,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Algas',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true
		},
		{
			nombre: 'Almendras',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			frutos_secos: false
		},
		{
			nombre: 'Anacardo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			frutos_secos: false
		},
		{
			nombre: 'Apio',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'MUR',
				'VLC',
				'CA'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				910,
				11,
				12
			]
		},
		{
			nombre: 'Arándano',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true
		},
		{
			nombre: 'Arroz blanco',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			fitness: true
		},
		{
			nombre: 'Arroz integral',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Atún',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			pescado: false
		},
		{
			nombre: 'Avellana',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			frutos_secos: false
		},
		{
			nombre: 'Avena',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Berenjena',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			diabetes: true,
			region: [
				'AND',
				'NAV'
			],
			temp: [
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Boniato',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			diabetes: true,
			region: [
				'AND'
			],
			temp: [
				10,
				11
			]
		},
		{
			nombre: 'Brócoli',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'MUR',
				'NAV'
			],
			temp: [
				1,
				2,
				5,
				6,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Cacahuete',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			cacahuete: false,
			frutos_secos: false,
			region: [
				'AND'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Cacao',
			vegetariana: true,
			vegana: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Calabacín',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND'
			],
			temp: [
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Calabaza',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'VLC',
				'CYL'
			],
			temp: [
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Calamar',
			mediterranea: true,
			paleo: true,
			proteica: true,
			diabetes: true,
			marisco: false
		},
		{
			nombre: 'Cangrejo',
			mediterranea: true,
			paleo: true,
			proteica: true,
			diabetes: true,
			marisco: false
		},
		{
			nombre: 'Caqui',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			diabetes: true,
			region: [
				'AND',
				'VLC',
				'CA'
			],
			temp: [
				10,
				11,
				12
			]
		},
		{
			nombre: 'Cardo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'NAV',
				'VLC',
				'LR'
			],
			temp: [
				1,
				2,
				3,
				11,
				12
			]
		},
		{
			nombre: 'Cebolla',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'CLM'
			],
			temp: [
				3,
				4,
				5,
				6,
				7,
				8,
				910,
				11,
				12
			]
		},
		{
			nombre: 'Cerdo',
			mediterranea: true,
			paleo: true,
			fitness: true,
			cetogenica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Cereza',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'EXT',
				'ARG',
				'CA'
			],
			temp: [
				5,
				6
			]
		},
		{
			nombre: 'Champiñón',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'CLM',
				'LR'
			],
			temp: [
				5,
				9,
				10,
				11
			]
		},
		{
			nombre: 'Coco',
			vegetariana: true,
			vegana: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			cetogenica: true,
			macrobiotica: true,
			region: [
				'CI'
			],
			temp: [
				1,
				3,
				4,
				6,
				7,
				8,
				10,
				12
			]
		},
		{
			nombre: 'Col',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'VLC',
				'GAL',
				'AND'
			],
			temp: [
				1,
				2,
				3,
				4,
				8,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Coliflor',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'NAV',
				'MUR'
			],
			temp: [
				1,
				2,
				3,
				4,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Conejo',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Cordero',
			mediterranea: true,
			paleo: true,
			fitness: true,
			cetogenica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Cuscús',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Dátiles',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			region: [
				'VLC'
			]
		},
		{
			nombre: 'Embutido (Jamón serrano, chorizo, etc.)',
			mediterranea: true,
			paleo: true,
			fitness: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Endivia',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'CYL',
				'NAV'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Espárrago',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'NAV',
				'CLM',
				'MAD'
			],
			temp: [
				3,
				4,
				5
			]
		},
		{
			nombre: 'Espinacas',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'NAV',
				'VLC',
				'CLM'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				8,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Frambuesa',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'AND',
				'EXT',
				'CYL'
			],
			temp: [
				5,
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Fresa',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'MA'
			],
			temp: [
				4,
				5,
				6,
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Gambas',
			mediterranea: true,
			paleo: true,
			proteica: true,
			diabetes: true,
			marisco: false
		},
		{
			nombre: 'Garbanzo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true
		},
		{
			nombre: 'Granada',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			macrobiotica: true,
			region: [
				'MUR',
				'VLC'
			],
			temp: [
				9,
				10
			]
		},
		{
			nombre: 'Guisante',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			cetogenica: true,
			macrobiotica: true,
			region: [
				'ARG',
				'NAV',
				'LR'
			],
			temp: [
				3,
				4,
				5,
				6
			]
		},
		{
			nombre: 'Haba',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			region: [
				'MUR',
				'VLC',
				'AND'
			],
			temp: [
				4,
				5
			]
		},
		{
			nombre: 'Higo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			region: [
				'AND',
				'VLC',
				'EXT',
				'CA'
			],
			temp: [
				7,
				8,
				9
			]
		},
		{
			nombre: 'Huevo de gallina',
			vegetariana: true,
			mediterranea: true,
			paleo: true,
			fitness: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			huevo: false
		},
		{
			nombre: 'Jengibre',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			macrobiotica: true,
			diabetes: true
		},
		{
			nombre: 'Judía verde',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'GAL'
			],
			temp: [
				5,
				6,
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Kiwi',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			region: [
				'GAL',
				'VLC'
			],
			temp: [
				1,
				2,
				3,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Langosta',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			marisco: false
		},
		{
			nombre: 'Leche de vaca',
			vegetariana: true,
			mediterranea: true,
			cetogenica: true,
			diabetes: true,
			lacteos: false,
			region: [
				'AST'
			]
		},
		{
			nombre: 'Lechuga',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'MUR'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Lentejas',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Limón',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'VLC',
				'MUR'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Lino',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Maíz',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			region: [
				'CYL',
				'EXT',
				'ARG'
			],
			temp: [
				8,
				9,
				10
			]
		},
		{
			nombre: 'Mandarina',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'AND',
				'VLC'
			],
			temp: [
				1,
				2,
				3,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Manzana',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'CA',
				'ARG'
			],
			temp: [
				7,
				8,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Melocotón',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			region: [
				'MUR',
				'CA',
				'ARG'
			],
			temp: [
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Melón',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			region: [
				'MUR',
				'CLM',
				'MA'
			],
			temp: [
				7,
				8,
				9
			]
		},
		{ nombre: 'Miel', vegetariana: true, mediterranea: true, fitness: true },
		{
			nombre: 'Mijo',
			vegetariana: true,
			vegana: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Mora',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			alcalina: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND'
			],
			temp: [
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Nabo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'CYL',
				'VLC',
				'AND'
			],
			temp: [
				1,
				2,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Naranja',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'AND',
				'VLC'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				11,
				12
			]
		},
		{
			nombre: 'Nectarina',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'ARG',
				'CA',
				'MUR'
			],
			temp: [
				5,
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Nuez',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			frutos_secos: false
		},
		{
			nombre: 'Ostras',
			paleo: true,
			proteica: true,
			diabetes: true,
			marisco: false
		},
		{
			nombre: 'Patata',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			alcalina: true,
			diabetes: true,
			region: [
				'CYL',
				'AST'
			],
			temp: [
				5,
				6,
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Pavo',
			mediterranea: true,
			paleo: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Pepino',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND'
			],
			temp: [
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Pera',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'CA',
				'LR'
			],
			temp: [
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Pescado azul',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			pescado: false
		},
		{
			nombre: 'Pescado blanco',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			pescado: false
		},
		{
			nombre: 'Pimiento',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'MUR'
			],
			temp: [
				6,
				7,
				8,
				9,
				10,
				11
			]
		},
		{
			nombre: 'Piñones',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			fitness: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			region: [
				'CYL'
			]
		},
		{
			nombre: 'Pistacho',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			frutos_secos: false
		},
		{
			nombre: 'Plátano',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'CI'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				910,
				11,
				12
			]
		},
		{
			nombre: 'Pollo',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Pomelo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'AND',
				'MUR',
				'VLC'
			],
			temp: [
				1,
				2,
				3,
				4,
				12
			]
		},
		{
			nombre: 'Puerro',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'CYL'
			],
			temp: [
				1,
				2,
				3,
				8,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Queso de cabra',
			vegetariana: true,
			mediterranea: true,
			fitness: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			lacteos: false
		},
		{
			nombre: 'Queso de oveja',
			vegetariana: true,
			mediterranea: true,
			fitness: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			lacteos: false
		},
		{
			nombre: 'Queso de vaca',
			vegetariana: true,
			mediterranea: true,
			fitness: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			lacteos: false
		},
		{
			nombre: 'Quinoa',
			vegetariana: true,
			vegana: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Rábano',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'VLC',
				'CYL'
			],
			temp: [
				3,
				5,
				6,
				7,
				9,
				10,
				11
			]
		},
		{
			nombre: 'Remolacha',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			macrobiotica: true,
			region: [
				'AND',
				'CYL'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			]
		},
		{
			nombre: 'Salmón',
			mediterranea: true,
			paleo: true,
			cetogenica: true,
			proteica: true,
			diabetes: true,
			pescado: false
		},
		{
			nombre: 'Sandía',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			alcalina: true,
			cetogenica: true,
			region: [
				'AND',
				'MUR',
				'CLM'
			],
			temp: [
				6,
				7,
				8,
				9
			]
		},
		{
			nombre: 'Semillas de girasol',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true,
			frutos_secos: false
		},
		{
			nombre: 'Sésamo',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			paleo: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Ternera',
			mediterranea: true,
			paleo: true,
			fitness: true,
			diabetes: true
		},
		{
			nombre: 'Tofu',
			vegetariana: true,
			vegana: true,
			cetogenica: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Tomate',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			cetogenica: true,
			diabetes: true,
			region: [
				'AND',
				'EXT'
			],
			temp: [
				6,
				7,
				8,
				9,
				10
			]
		},
		{
			nombre: 'Trigo (no harina)',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Trigo sarraceno',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			rica_en_fibra: true,
			fitness: true,
			alcalina: true,
			macrobiotica: true,
			proteica: true,
			diabetes: true
		},
		{
			nombre: 'Uva',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			macrobiotica: true,
			region: [
				'CLM',
				'LR',
				'EXT',
				'MA'
			],
			temp: [
				8,
				9,
				10
			]
		},
		{
			nombre: 'Zanahoria',
			vegetariana: true,
			vegana: true,
			mediterranea: true,
			macrobiotica: true,
			diabetes: true,
			region: [
				'AND',
				'CYL'
			],
			temp: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			]
		}
	],
	regiones: [
		{ MA: 'Madrid' },
		{ CA: 'Catalonia' },
		{ CLM: 'Castille-La Mancha' },
		{ VLC: 'Valencia' },
		{ BL: 'Balearic Islands' },
		{ CI: 'Canary Islands' },
		{ EXT: 'Extremadura' },
		{ MUR: 'Murcia' },
		{ AND: 'Andalusia' },
		{ CYL: 'Castille and León' },
		{ AST: 'Principality of Asturias' },
		{ GAL: 'Galicia' },
		{ CAN: 'Cantabria' },
		{ PV: 'Basque Country' },
		{ LR: 'La Rioja' },
		{ ARG: 'Aragon' },
		{ NAV: 'Navarre' },
		{ CEU: 'Ceuta' },
		{ MEL: 'Melilla' }
	]
};

export const db2 = {
	alergenos: db1.alergenos.map((a) =>
		a.replace(regExpFirst, a[0].toUpperCase()).replace(regExpUnder, ' ')
	),
	dietas: db1.dietas.map((a) =>
		a.replace(regExpFirst, a[0].toUpperCase()).replace(regExpUnder, ' ')
	),
	regionesArr: [
		`Madrid`,
		`Cataluña`,
		`Castilla La Mancha`,
		`Valencia`,
		`Islas Baleares`,
		`Islas Canarias`,
		`Extremadura`,
		`Murcia`,
		`Andalucía`,
		`Castilla y León`,
		`Principado de Asturias`,
		`Galicia`,
		`Cantabria`,
		`Páis Vasco`,
		`La Rioja`,
		`Aragón`,
		`Navarra`,
		`Ceuta`,
		`Melilla`
	],
	regiones: db1.regiones
};
