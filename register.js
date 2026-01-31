document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // prevent page refresh

  // Collect user data
  const userData = {
    name: document.getElementById("name").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    address: document.getElementById("address").value.trim(),
    pincode: document.getElementById("pincode").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
    role: document.getElementById("role").value || "user" // default role
  };

  // Basic frontend validation
  if (!userData.name || !userData.mobile || !userData.address || !userData.pincode || !userData.email || !userData.password) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    // Send POST request to backend
    const response = await fetch("https://code-alpha-ecometric-backend-1.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message); // "User registered successfully"
      window.location.href = "login.html"; // redirect to login page
    } else {
      alert(result.message); // show backend error (like duplicate email)
    }

  } catch (error) {
    console.error("Network error:", error);
    alert("Network error or server not reachable.");
  }
});

