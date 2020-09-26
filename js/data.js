let productsData = [
	{
		name: 'balls',
		id: '10001',
		price: 28.58,
		imgSrc: '../img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},

	{
		name: 'footballs',
		id: '10002',
		price: 30.47,
		imgSrc: '../img/sports/footballs.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'backetballs',
		id: '10003',
		price: 10.51,
		imgSrc: '../img/sports/backetballs.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'mouses',
		id: '10004',
		price: 12.77,
		imgSrc: '../img/tech/mouses.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'tech',
		catogreyCode: 'tech-001',
	},
	{
		name: 'iphone',
		id: '10005',
		price: 252.5,
		imgSrc: '../img/tech/iphone.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'tech',
		catogreyCode: 'tech-001',
	},
	{
		name: 'keybored',
		id: '10006',
		price: 24.9,
		imgSrc: '../img/tech/keybored.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'tech',
		catogreyCode: 'tech-001',
	},
	{
		name: 'T-shirt',
		id: '10007',
		price: 25.58,
		imgSrc: '../img/clothes/T-shirt.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'clothes',
		catogreyCode: 'clothes-001',
	},
	{
		name: 'Shirt',
		id: '10008',
		price: 25.58,
		imgSrc: '../img/clothes/Shirt.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'clothes',
		catogreyCode: 'clothes-001',
	},
	{
		name: 'jacket',
		id: '10009',
		price: 25.58,
		imgSrc: '../img/clothes/jacket.png',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'clothes',
		catogreyCode: 'clothes-001',
	},
	{
		name: 'balls',
		id: '10010',
		price: 28.58,
		imgSrc: '../img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'balls',
		id: '10011',
		price: 28.58,
		imgSrc: '../img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'balls',
		id: '10012',
		price: 28.58,
		imgSrc: '../img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
];

//Store The Data inside LocalStorage For The First Run ..
if (localStorage.getItem('products')) {
	products = JSON.parse(localStorage.getItem('products'));
} else {
	//Set The Local Storage of The first Time and then set it's value to products
	localStorage.setItem('products', JSON.stringify(productsData));
	products = JSON.parse(localStorage.getItem('products'));
}

const updateLocalStorage = (data) => {
	localStorage.setItem('products', JSON.stringify(data));
	return JSON.parse(localStorage.getItem('products'));
};
