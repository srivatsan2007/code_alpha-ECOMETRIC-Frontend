/*async function searchProducts() {
  const query = document.getElementById("searchInput").value;

  try {
    const res = await fetch(
      `http://localhost:5000/api/products/search?query=${query}`
    );

    if (!res.ok) {
      alert("Product not found");
      return;
    }

    const product = await res.json();

    // 🔁 Redirect to product page
    window.location.href = `product.html?id=${product._id}`;

  } catch (err) {
    console.error(err);
  }
}

/* NEW UPDATED PRODUCT THAT WILL SEARCH FROM SEARCH BAR 

  const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99, image: "https://via.placeholder.com/220x150?text=Headphones" },
    { id: 2, name: "Smart Watch", price: 129.99, image: "https://via.placeholder.com/220x150?text=Smart+Watch" },
    { id: 3, name: "Bluetooth Speaker", price: 45.50, image: "https://via.placeholder.com/220x150?text=Speaker" },
    { id: 4, name: "Gaming Mouse", price: 35.00, image: "https://via.placeholder.com/220x150?text=Mouse" },
    { id: 5, name: "Laptop Stand", price: 25.99, image: "https://via.placeholder.com/220x150?text=Laptop+Stand" }
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderProducts(list = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    list.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <label>Qty: <input type="number" min="1" value="1" id="qty-${product.id}" class="quantity-input"></label><br>
        <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
      `;
      productList.appendChild(card);
    });
  }

  function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qty = parseInt(document.getElementById(`qty-${productId}`).value);
    const index = cart.findIndex(item => item.id === productId);
    if(index !== -1) cart[index].quantity += qty;
    else cart.push({...product, quantity: qty});
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} <button onclick="removeFromCart(${index})">Remove</button>`;
      cartItems.appendChild(li);
    });
    document.getElementById("totalAmount").textContent = `Total: $${total.toFixed(2)}`;
  }

  function removeFromCart(index) {
    cart.splice(index,1);
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    const qty = parseInt(document.getElementById(`qty-${productId}`).value);
    localStorage.setItem("buyNowProduct", JSON.stringify([{...product, quantity: qty}]));
    window.location.href = "payment.html";
  }

  function buyAllCart() {
    if(cart.length === 0){ alert("Cart is empty!"); return; }
    localStorage.setItem("buyNowProduct", JSON.stringify(cart));
    window.location.href = "payment.html";
  }

  renderProducts();
  updateCartUI();*/

  async function searchProduct() {
  const query = document.getElementById("searchInput").value.trim();

  if (!query) return;

  try {
    const res = await fetch(
      `http://localhost:5000/api/products/search?query=${encodeURIComponent(query)}`
    );

    if (!res.ok) {
      alert("Product not found");
      return;
    }

    const product = await res.json();

    // 🔥 Redirect to product.html
    window.location.href = `product.html?id=${product._id}`;

  } catch (err) {
    console.error("Search error:", err);
  }
}
