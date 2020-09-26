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

const objectKeyCount = (obj, key) => {
	if (obj[key]) {
		obj[key] = obj[key] + 1;
	} else {
		obj[key] = 1;
	}
	return obj;
};

let createProductDiv = (ParentDiv, innerText, src, ProductObj) => {
	if (document.getElementById(ProductObj.id)) {
	} else {
		let ProductDiv = document.createElement('div');
		ProductDiv.id = ProductObj.id;
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
	}
};

const createCatagoryArray = () => {
	let CatagoryArray = {};
	products.forEach((product) => {
		objectKeyCount(CatagoryArray, product.catogrey);
	});
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
	let objCount = objectKeyCount(shoppingList, ProductObj.id);
	let count = Object.values(objCount).reduce((a, b) => a + b);
	createBadgeElement(document.getElementById('shoppingBasket'), count);
};

let CatagoreyArrayIds = createCatagoryArray();
const calcualteWidthOfProductVsCato = () => {
	let widthOfProdcut = [...document.querySelectorAll('div.Product')].reduce(
		(a, b) => {
			return b.offsetWidth > a ? b.offsetWidth : a;
		},
		0
	);

	let widthOfCatoDiv = CatagoreyArrayIds.reduce((a, b) => {
		return document.getElementById(b).offsetWidth > a
			? document.getElementById(b).offsetWidth
			: a;
	}, 0);

	return Math.floor(widthOfCatoDiv / widthOfProdcut);
};

let CatoDivObjForSliders = {};
const createSliders = (noOfProductPerEachCato) => {
	createCatagoryArray().forEach((cato) => {
		if (
			document.getElementById('prevBtn-' + cato) &&
			document.getElementById('nextBtn-' + cato)
		) {
			CatoDivObjForSliders[cato].updateSlider(
				noOfProductPerEachCato,
				cato,
				'Product'
			);
		} else {
			let slider = new Slider(noOfProductPerEachCato, cato, 'Product');
			CatoDivObjForSliders[cato] = slider;
			let catoDiv = document.getElementById(cato);
			let prevButton = document.createElement('a');
			prevButton.id = 'prevBtn-' + cato;
			prevButton.className = 'prev';
			prevButton.innerHTML = '&#10094;';
			prevButton.onclick = () => {
				slider.plusSlides(-1);
			};
			let nextButton = document.createElement('a');
			nextButton.id = 'nextBtn-' + cato;
			nextButton.className = 'next';
			nextButton.innerHTML = '&#10095;';
			nextButton.onclick = () => {
				slider.plusSlides(1);
			};

			catoDiv.appendChild(prevButton);
			catoDiv.appendChild(nextButton);
		}
	});
};

const createProductsInsideDivs = (products, productsCatagoryDiv) => {
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
};
