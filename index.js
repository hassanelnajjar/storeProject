//Create Catogery Divs and Produts inside
createProductsInsideDivs(products, document.getElementById('products'));


//Create Slides on Catogery Divs Based on Width of these divs and prodcuts
createSliders(calcualteWidthOfProductVsCato());


//Events : Responsive :)
window.onresize = () => {
	createSliders(calcualteWidthOfProductVsCato());
};
