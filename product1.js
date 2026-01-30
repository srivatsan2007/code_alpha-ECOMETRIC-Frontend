
function changeImage(el) {
  const card = el.closest(".product-card");
  const mainImg = card.querySelector(".main-img");
  mainImg.src = el.src;
}

function addToCart(id, name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function buyNow(id, name, price, image) {
  const buyItem = [{ id, name, price, image, qty: 1 }];
  localStorage.setItem("buyNow", JSON.stringify(buyItem));

  // 🔁 Redirect to payment page
  window.location.href = "payment.html";
}

