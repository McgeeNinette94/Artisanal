// 
//Variables

let boutiqueName = "Hilly Boutique";
let tagLine = "Unique and One-Of-A-Kind";
let products = "Handmade Products";
let prodDesc = "Independent Artisans and Designers";
let shoppers = [];
let cartTotal = 0;
let itemTotal = 0;

//Helper Functions

function addProduct(name, price) {
  let item = {
    name: name,
    price: price
  };
  products.push(item);
}

function addShopper(name) {
  let customer = {
    name: name,
    totalSpent: 0
  };
  shoppers.push(customer);
}

function addItemToCart(name) {
over for(let i = 0; i < products.length; i++) {
    if (name === products[i].name) {
      cartTotal += products[i].price;
      itemTotal += 1;
    }
  }
}

function checkOut(name) {
  for (let i = 0; i < shoppers.length; i++) {
    if (name === shoppers[i].name) {
      shoppers[i].totalSpent += cartTotal;
    }
  }
  cartTotal = 0;
  itemTotal = 0;
}

//Event Listeners

document.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;

  addProduct(product, price);
  addShopper(name);
  addItemToCart(product);
  checkOut(name);

  document.getElementById("name").value = "";
  document.getElementById("product").value = "";
  document.getElementById("price").value = "";
});

// Initial Setup

document.getElementById("boutique").innerHTML = boutiqueName + " - " + tagLine;
document.getElementById("products").innerHTML = products + " - " + prodDesc;