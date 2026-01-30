
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // prevent page refresh

  const userData = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    address: document.getElementById("address").value,
    pincode: document.getElementById("pincode").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value   // ✅ NEW
  };

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "login.html"; // ✅ Redirect
    } else {
      alert(result.message);
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Server error");
  }
});
