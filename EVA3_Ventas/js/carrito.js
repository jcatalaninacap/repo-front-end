document.addEventListener("DOMContentLoaded", function() {

    updateCartCount();
    loadCartItems();
 
});
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });
    document.getElementById("cart-total").innerText = `Total: $${total}`;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addToCart(event, itemName, price) {
    event.stopPropagation();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: itemName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${itemName} ha sido agregado al carrito.`);
}





function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

function toggleCart() {
    let cart = document.getElementById("cart");
    cart.style.display = cart.style.display === "block" ? "none" : "block";
}

function checkout() {
    alert("¡Gracias por tu compra!");
    localStorage.removeItem("cart");
    updateCartCount();
    loadCartItems();
    toggleCart();
}