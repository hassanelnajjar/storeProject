const products = [
	{
		name: 'balls',
		id: '10001',
		price: 28.58,
		imgSrc: './img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},

	{
		name: 'footballs',
		id: '10002',
		price: 30.47,
		imgSrc: './img/sports/footballs.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'backetballs',
		id: '10003',
		price: 10.51,
		imgSrc: './img/sports/backetballs.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'mouses',
		id: '10004',
		price: 12.77,
		imgSrc: './img/tech/mouses.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'tech',
		catogreyCode: 'tech-001',
	},
	{
		name: 'iphone',
		id: '10005',
		price: 252.5,
		imgSrc: './img/tech/iphone.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'tech',
		catogreyCode: 'tech-001',
	},
	{
		name: 'keybored',
		id: '10006',
		price: 24.9,
		imgSrc: './img/tech/keybored.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'tech',
		catogreyCode: 'tech-001',
	},
	{
		name: 'T-shirt',
		id: '10007',
		price: 25.58,
		imgSrc: './img/clothes/T-shirt.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'clothes',
		catogreyCode: 'clothes-001',
	},
	{
		name: 'Shirt',
		id: '10008',
		price: 25.58,
		imgSrc: './img/clothes/Shirt.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'clothes',
		catogreyCode: 'clothes-001',
	},
	{
		name: 'jacket',
		id: '10009',
		price: 25.58,
		imgSrc: './img/clothes/jacket.png',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'clothes',
		catogreyCode: 'clothes-001',
	},
	{
		name: 'balls',
		id: '10010',
		price: 28.58,
		imgSrc: './img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'balls',
		id: '10011',
		price: 28.58,
		imgSrc: './img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
	{
		name: 'balls',
		id: '10012',
		price: 28.58,
		imgSrc: './img/sports/balls.jpg',
		owner: 'hassan',
		ownerCode: 'Ow-001',
		catogrey: 'sports',
		catogreyCode: 'sports-001',
	},
];

let createCatagoryDiv = (ParentDiv, id) => {
	if (document.getElementById(id)) {
		CatogreyDiv = document.getElementById(id);
	} else {
		CatogreyDiv = document.createElement('div');
		//CatogreyDiv.innerText = id;
		CatogreyDiv.id = id;
		CatogreyDiv.className = 'Catagory';
		ParentDiv.appendChild(CatogreyDiv);
	}
	return CatogreyDiv;
};

let createProductDiv = (ParentDiv, innerText, src, ProductObj) => {
	let ProductDiv = document.createElement('div');
	//ProductDiv.innerText = innerText;
	ProductDiv.className = 'Product';

	let img = document.createElement('img');
	img.src = src;

	let priceSpan = document.createElement('span');
	priceSpan.className = 'badge';
	priceSpan.innerText = ProductObj.price + ' $';
	let button = document.createElement('button');
	button.textContent = 'Add To Shopping cart';
	button.id = 'buy';
	ProductDiv.append(img, priceSpan, button);
	ParentDiv.appendChild(ProductDiv);
	button.onclick = () => {
		addToShopping(ProductDiv, ProductObj);
	};
};

const productsCatagoryDiv = document.getElementById('products');

products.forEach((product) => {
	//Create Catagorey Div
	let CatogreyDiv = createCatagoryDiv(productsCatagoryDiv, product.catogrey);
	//Create Products Div inside Catogrey
	let ProductDiv = createProductDiv(
		CatogreyDiv,
		product.name,
		product.imgSrc,
		product
	);
});

const objectKeyCount = (obj, key) => {
	if (obj[key]) {
		obj[key] = obj[key] + 1;
	} else {
		obj[key] = 1;
	}
	return obj;
};

const createCatagoryArray = () => {
	let CatagoryArray = {};
	products.forEach((product) => {
		objectKeyCount(CatagoryArray, product.catogrey);
	});
	console.log(CatagoryArray);
	return Object.keys(CatagoryArray);
};

const createBadgeElement = (ParentDiv, count) => {
	if (document.getElementById('imgShoppingCart')) {
		document.getElementById('CountOfShoppingItems').innerText = count;
	} else {
		let badgeDiv = document.createElement('div');
		badgeDiv.className = 'badgeDiv';
		let imgShoppingCart = document.createElement('img');
		imgShoppingCart.id = 'imgShoppingCart';
		imgShoppingCart.src = './img/shoppingCart.png';
		let badge = document.createElement('span');
		badge.id = 'CountOfShoppingItems';
		badge.className = 'badge';
		badge.innerText = count;
		badgeDiv.append(imgShoppingCart, badge);
		ParentDiv.appendChild(badgeDiv);
	}
};

let shoppingList = {};
const addToShopping = (ProductDiv, ProductObj) => {
	let btn = ProductDiv.cloneNode(true);
	//document.getElementById('shoppingBasket').appendChild(btn);
	let objCount = objectKeyCount(shoppingList, ProductObj.id);
	let count = Object.values(objCount).reduce((a, b) => a + b);
	createBadgeElement(document.getElementById('shoppingBasket'), count);
};

//Create Slideshow ...
createCatagoryArray().forEach((cato) => {
	console.log(cato);
	let slider = new Slider(2, cato, 'Product');
	let catoDiv = document.getElementById(cato);
	let prevButton = document.createElement('a');
	prevButton.className = 'prev';
	prevButton.innerHTML = '&#10094;';
	prevButton.onclick = () => {
		slider.plusSlides(-1);
	};

	let nextButton = document.createElement('a');
	nextButton.className = 'next';
	nextButton.innerHTML = '&#10095;';
	nextButton.onclick = () => {
		slider.plusSlides(1);
	};
	catoDiv.append(prevButton, nextButton);
});
