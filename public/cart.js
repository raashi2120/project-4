function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { id: productId, quantity: 1 };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function updateCart(productId, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (!cart[productId]) return;

    cart[productId].quantity += change;

    if (cart[productId].quantity <= 0) {
        delete cart[productId];
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    delete cart[productId];
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}
