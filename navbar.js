const userId = "PUT_LOGGED_IN_USER_ID_HERE";

/* 👤 PROFILE */
async function loadProfile() {
  const res = await fetch(`https://code-alpha-ecometric-backend-1.onrender.com/api/user/${userId}`);
  const user = await res.json();

  document.getElementById("content").innerHTML = `
    <h2>${user.name}</h2>
    <p>${user.email}</p>
    <p>Language: ${user.language}</p>
  `;
}

/* 📦 RECENT ORDERS */
async function loadOrders() {
  const res = await fetch(`https://code-alpha-ecometric-backend-1.onrender.com/api/orders/${userId}`);
  const orders = await res.json();

  document.getElementById("content").innerHTML =
    orders.map(o => `
      <p>Order ID: ${o._id} | Status: ${o.status}</p>
    `).join("");
}

/* 🛒 CART */
function openCart() {
  document.getElementById("content").innerHTML = "<h2>Your Cart</h2>";
}

/* 🚚 ORDER STATUS */
async function checkStatus() {
  const res = await fetch(`https://code-alpha-ecometric-backend-1.onrender.com/api/order-status/${userId}`);
  const status = await res.json();

  document.getElementById("content").innerHTML =
    status.map(s => `
      <p>Order ${s.id} → ${s.status}</p>
    `).join("");
}

/* 🌐 CHANGE LANGUAGE */
async function changeLanguage(lang) {
  await fetch(`https://code-alpha-ecometric-backend-1.onrender.com/api/user/language/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language: lang })
  });

  alert("Language updated");
}

