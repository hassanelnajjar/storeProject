const products = [
	{
		sports: [
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'T Shirt',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'Footballs',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
		],
	},
	{
		clothes: [
			{
				name: 'Shirts',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'Dresses',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
		],
	},
	{
		tech: [
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
		],
	},
	{
		Accessories: [
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
			{
				name: 'balls',
				price: 25.58,
				imgSrc: './img/sports/balls.jpeg',
				owner: 'hassan',
			},
		],
	},
];

let createCatagoryDiv = (ParentDiv, innerText, id) => {
	let CatogreyDiv = document.createElement('div');
	//CatogreyDiv.innerText = innerText;
	CatogreyDiv.id = id;
	CatogreyDiv.className = 'Catagory';
	ParentDiv.appendChild(CatogreyDiv);
	return CatogreyDiv;
};

const productsCatagoryDiv = document.getElementById('products');

let createProductDiv = (ParentDiv, innerText) => {
	let ProductDiv = document.createElement('div');
	ProductDiv.innerText = innerText;
	ProductDiv.className = 'Product';
	ParentDiv.appendChild(ProductDiv);
};

products.forEach((catogrey) => {
	//Create Cataogry Div
	let CatogreyDiv = createCatagoryDiv(
		productsCatagoryDiv,
		Object.keys(catogrey),
		Object.keys(catogrey)
	);
	//Create Products Div inside Catogrey
	let prouctArrayOfCatagory = Object.values(catogrey)[0];
	prouctArrayOfCatagory.forEach((product) => {
		createProductDiv(CatogreyDiv, product.name);
	});
});
