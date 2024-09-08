// Function to update the cart display
function updateCart() {
    let cartItem = document.querySelector(".cart-list");
    cartItem.innerHTML = "";

    let subtotal = 0;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItem.innerHTML = `
        <div class="empty-cart">
            <img src="images/no-cart.gif" alt="Empty Cart">
            <p>No products in the cart</p>
            <a href="index.html" class="start"><button>Start Shopping</button></a>
        </div>`

        document.querySelector('.cart-summary').style.display = 'none'; // Hide cart summary
        return;
    }

    cart.forEach(item => {
        let cartDiv = document.createElement("div");
        cartDiv.classList.add("cart-item");
        cartDiv.innerHTML = `
         <img src="${item.imageUrl}" alt="${item.name}">
        <p>${item.name}</p>
        <p class="pr">₹ ${item.price} x 
            <button onclick="decrease(${item.id})">-</button>
            <span id="quantity-${item.id}">${item.quantity}</span>
            <button onclick="increase(${item.id})">+</button>
        </p>
        <p class="p">Total: ₹ ${item.price * item.quantity}</p>
        <button class="clear" onclick="remove(${item.id})">Remove</button>`;

        cartItem.appendChild(cartDiv);

        subtotal += item.price * item.quantity;
    });

    const tax = subtotal * 0.05;
    const service = 5;
    const deliveryThreshold = 8000;
    let del = 29;

    // Check if subtotal exceeds delivery threshold
    if (subtotal >= deliveryThreshold) {
        del = 0; // Free delivery
        document.getElementById('del').innerText = 'Free Delivery';
        
    } else {
        document.getElementById('del').innerText = `₹ ${del.toFixed(2)}`;
    }

    const total = subtotal + tax + del + service;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('service').innerText = service.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
    document.querySelector('.cart-summary').style.display = 'block'; // Show cart summary
}





// Function to increment product quantity
function increase(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

// Function to decrement product Quantity
function decrease(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

// Function to remove product from cart
function remove(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Add event listener for DOMContentLoaded to initialize the cart
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
