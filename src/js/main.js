import productData from "./productData.js";
import productList from "./productList.js";

// first create an instance of our ProductData class.
const dataSource = new productData("tents");
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const myList = new productList("tents", dataSource, listElement);
// finally call the init method to show our products
myList.init();
