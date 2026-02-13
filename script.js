function register() {
  let user = {
    username: username.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered Successfully");
  window.location.href = "login.html";
}

function login() {
  let stored = JSON.parse(localStorage.getItem("user"));
  if (loginUser.value === stored.username && loginPass.value === stored.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "products.html";
  } else {
    document.getElementById("error").innerText = "Invalid Credentials";
  }
}

function addToCartCheck() {
  if (!localStorage.getItem("user")) {
    window.location.href = "register.html";
  } else if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  } else {
    alert("Added to cart");
  }
}

function addProduct(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + "Product Added");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(p => {
    cartItems.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
    total += p.price;
  });
  total.innerText = "Total: ₹" + total;
  localStorage.setItem("total", total);
}

if (document.getElementById("cartItems")) loadCart();

function proceedPayment() {
  window.location.href = "payment.html";
}

if (document.getElementById("payAmount")) {
  payAmount.innerText = "Payable Amount: ₹" + localStorage.getItem("total");
}

function viewProduct() {
  window.location.href = "product.html";
}

function clearCart()
{
  localStorage.removeItem("cart");
  document.getElementById("cartItems").innerHTML="";
  alert("cart cleared successfully");
}

