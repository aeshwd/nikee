// List of products
const products1 = [
    { id: 1, name: 'Download 13 Running Shoe', price: 4080, imageUrl: 'images/nike-1.webp', main: 'Nike' },
    { id: 2, name: 'Revolution 7 Running Shoes', price: 2972, imageUrl: 'images/nike2.webp', main: 'Nike' },
    { id: 3, name: 'Mens Court Vision Shoes', price: 4245, imageUrl: 'images/nike3.webp', main: 'Nike' },
    { id: 4, name: 'Revolution 6 Nn 4e Shoes', price: 5320, imageUrl: 'images/nike4.webp', main: 'Nike' },
    { id: 5, name: 'Mens Quest 5 Running Shoes', price: 3104, imageUrl: 'images/nike5.webp', main: 'Nike' },
    { id: 6, name: 'Run Swift 3 Shoes', price: 4406, imageUrl: 'images/nike6.webp', main: 'Nike' },
    { id: 7, name: 'Mens Full Force Shoes', price: 5947, imageUrl: 'images/nike7.webp', main: 'Nike' },
    { id: 8, name: 'Mens Journey Run Shoes', price: 5327, imageUrl: 'images/nike8.webp', main: 'Nike' },
];


const products2 = [
    { id: 9, name: 'Mens Court Vision', price: 4745, imageUrl: 'images/nike9.jpg', main: 'Nike' },
    { id: 10, name: 'Mens Flex Experience Running Shoes', price: 3696, imageUrl: 'images/nike10.jpg', main: 'Nike' },
    { id: 11, name: 'Mens Lowtop Waffle Nav', price: 6244, imageUrl: 'images/nike11.jpg', main: 'Nike' },
    { id: 12, name: 'Air Jordan CMFT 2 Running', price: 13295, imageUrl: 'images/nike12.jpg', main: 'Nike' },
    { id: 13, name: 'Mens Air Winflo Running Shoes', price: 6639, imageUrl: 'images/nike13.jpg', main: 'Nike' },
    { id: 14, name: 'Air Zoom Pegasus 40 Shoes', price: 8445, imageUrl: 'images/nike14.jpg', main: 'Nike' },
    { id: 15, name: 'Mens Air Zoom Structure Shoes', price: 8089, imageUrl: 'images/nike15.jpg', main: 'Nike' },
    { id: 16, name: 'Women WMNS Running Shoes', price: 3596, imageUrl: 'images/nike16.jpg', main: 'Nike' },
];

const products3 = [
    { id: 17, name: 'Mens Renew Run 4 Running Shoes', price: 3529, imageUrl: 'images/nike17.jpg', main: 'Nike' },
    { id: 18, name: 'Mens React Trail 4 Running Shoe', price: 11590, imageUrl: 'images/nike18.jpg', main: 'Nike' },
    { id: 19, name: 'Mens M Air Max Trainer 6 Shoes', price: 6484, imageUrl: 'images/nike19.jpg', main: 'Nike' },
    { id: 20, name: 'Mens City Rep Tr Sneaker', price: 3108, imageUrl: 'images/nike20.jpg', main: 'Nike' },
    { id: 21, name: 'Women Md Runner 2 Lw Shoes', price: 4199, imageUrl: 'images/nike21.jpg', main: 'Nike' },
    { id: 22, name: 'Interact Mens Running Shoes', price: 5474, imageUrl: 'images/nike22.jpg', main: 'Nike' },
    { id: 23, name: 'Mens Jordan One Take Running Shoes', price: 6639, imageUrl: 'images/nike23.jpg', main: 'Nike' },
    { id: 24, name: 'Running Shoes Zoom Tr 1 ', price: 7557, imageUrl: 'images/nike24.jpg', main: 'Nike' },
];

// Function to handle "Add to Cart" and store in local storage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];  // Retrieve existing cart from localStorage or create an empty array

    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // If the product exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product doesn't exist, add it with quantity 1
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart back to localStorage
    alert(`${product.name} has been added to your cart!`);
}



// Function to add Products1 on the Page

function addProducts1(filtered) {
    let productsList = document.querySelector(".products-list1");
    productsList.innerHTML = "";

    filtered.forEach(product => {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
        <h4>Nike</h4>
        <img src="${product.imageUrl}" />
        <h2>${product.name}</h2>
        <h2 class="price">Rs. ${product.price}</h2>
        <button class="add-to-cart"> Add To Cart </button>`

        // Add click event to the "Add To Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
        });

        productsList.appendChild(productItem);
    })
}


// Function to add Products2 on the Page

function addProducts2(filtered) {
    let productsList = document.querySelector(".products-list2");
    productsList.innerHTML = "";

    filtered.forEach(product => {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
        <h4>Nike</h4>
        <img src="${product.imageUrl}" />
        <h2>${product.name}</h2>
        <h2 class="price">Rs. ${product.price}</h2>
        <button class="add-to-cart"> Add To Cart </button>`

        // Add click event to the "Add To Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
        });

        productsList.appendChild(productItem);
    })
}

// Function to add Products3 on the Page

function addProducts3(filtered) {
    let productsList = document.querySelector(".products-list3");
    productsList.innerHTML = "";

    filtered.forEach(product => {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
        <h4>Nike</h4>
        <img src="${product.imageUrl}" />
        <h2>${product.name}</h2>
        <h2 class="price">Rs. ${product.price}</h2>
        <button class="add-to-cart"> Add To Cart </button>`

        // Add click event to the "Add To Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
        });

        productsList.appendChild(productItem);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    addProducts1(products1);
    addProducts2(products2);
    addProducts3(products3);
})