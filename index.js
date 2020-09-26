//Create Catogery Divs and Produts inside
createProductsInsideDivs(products, document.getElementById('products'));

//Create Slides on Catogery Divs Based on Width of these divs and prodcuts
createSliders(calcualteWidthOfProductVsCato());

//Events : Responsive :)
window.onresize = () => {
	createSliders(calcualteWidthOfProductVsCato());
};

//Create Dealer Page With Form To Add Products :-
let AddProductBtn = document.getElementById('AddProductBtn');
AddProductBtn.onclick = () => {
	let ProductId =
		products
			.map((product) => +product.id)
			.reduce((a, b) => {
				return b > a ? b : a;
			}, 0) + 1;
	let newProduct = {
		name: document.getElementById('Product-name').value,
		id: ProductId.toString(),
		price: +document.getElementById('Product-price').value,
		imgSrc: document
			.getElementById('Product-imgSrc_cutom')
			.value.replace(
				'C:\\fakepath\\',
				'.\\img\\' + document.getElementById('Product-catogrey').value + '\\'
			),
		owner: 'hassan',
		catogrey: document.getElementById('Product-catogrey').value,
	};

	if (Object.values(newProduct).filter((input) => input == '').length == 0) {
		products.push(newProduct);
		products = updateLocalStorage(products);
		createProductsInsideDivs(products, document.getElementById('products'));
		createSliders(calcualteWidthOfProductVsCato());
	} else {
		alert('Please Enter All Values ..');
	}
};

//Custom File Input :-
const Product_imgSrc_cutom = document.getElementById('Product-imgSrc_cutom');
const custom_upload_btn = document.getElementById('custom_upload_btn');
const custom_text_span = document.getElementById('custom_text_span');

custom_upload_btn.onclick = () => {
	Product_imgSrc_cutom.click();
};

Product_imgSrc_cutom.addEventListener('change', () => {
	custom_text_span.innerHTML = Product_imgSrc_cutom.value;
});

//Validation Input Data ..
