const products = [
	{
		_id: '67rdca3eeb7f6fgeed471198',
		name: 'RTX 4090',
		price: '2000$',
		rate: 5,
		bookmark: false,
		availability: 0,
		manufacturer: 'USA',
		guarantee: 36,
		EnergyConsumption: '450W',
		link: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/228/131/457/311/828/100044516042b0.png'
	},
	{
		_id: '67rdca3eeb7f6fgeed471100',
		name: 'RTX 4080',
		price: '1500$',
		rate: 4,
		bookmark: false,
		availability: 21,
		manufacturer: 'USA',
		guarantee: 24,
		EnergyConsumption: '400W',
		link: 'https://s3.e2e4.ru/imgproxy/2850902'
	},
	{
		_id: '67rdca3eeb7f6fgeed4711012',
		name: 'RTX 4070',
		price: '1200$',
		rate: 3.5,
		bookmark: false,
		availability: 16,
		manufacturer: 'Germany',
		guarantee: 12,
		EnergyConsumption: '300W',
		link: 'https://www.regard.ru/api/site/cacheimg/goods/1031356/1000'
	},
	{
		_id: '67rdca3eeb7f6fgeed471101',
		name: 'RTX 4060',
		price: '1000$',
		rate: 4.5,
		bookmark: false,
		availability: 30,
		manufacturer: 'CHINA',
		guarantee: 12,
		EnergyConsumption: '200W',
		link: 'https://racunalniske-novice.com/wp-content/uploads/2022/10/features-slide-6-2.png'
	},
	{
		_id: '67rdca3eeb7f6fgeed411101',
		name: 'RTX A5000',
		price: '4000$',
		rate: 4.1,
		bookmark: false,
		availability: 11,
		manufacturer: 'USA',
		guarantee: 36,
		EnergyConsumption: '400W',
		link: 'https://www.pny.com/productimages/BF379F95-E68E-4F27-9B6B-AD0800D78BE0/images/RTX_A-Series-A5000_3QTR-Left.png'
	},
	{
		_id: '67rdca3eWb7f6fgeed411101',
		name: 'Radeon RX 7900',
		price: '1600$',
		rate: 3.9,
		bookmark: false,
		availability: 11,
		manufacturer: 'USA',
		guarantee: 12,
		EnergyConsumption: '200W',
		link: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/579976_amd_radeon_6800xt_option_1260x709_png.png'
	}
]

const fetchAll = () =>
	new Promise((resolve) => {
		window.setTimeout(function () {
			resolve(products)
		}, 2000)
	})

export default {
	fetchAll
}
