const cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);

document.getElementById('bookList').innerHTML = cartItems;

document.getElementById("return-home").onclick = () => window.location.href = "index.html";

const saveCartToStorage = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
const loadCartFromStorage = () => JSON.parse(localStorage.getItem("cart")) || [];
