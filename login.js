document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  /*const loginData = {
    email: email.value,
    password: password.value
  };*/

  const loginData = {
  email: document.getElementById("email").value,
  password: document.getElementById("password").value
};


  /*try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    });*/

    try {
      const response = await fetch("https://code-alpha-ecometric-backend-1.onrender.com/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(loginData)
});


    const result = await response.json();
    console.log("Login response:", result);

    if (response.ok) {
      alert("Login successful");
      localStorage.setItem("user", JSON.stringify(result));

      if (result.role === "admin") {
        window.location.href = "./admin.html";
      } else if (result.role === "user") {
        window.location.href = "./user-dashboard.html";
      } else {
        alert("Role not found");
      }

    } else {
      alert(result.message);
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Server error");
  }

  /*localStorage.setItem("user", JSON.stringify({
  id: "USER_ID_FROM_DATABASE",
  name: "User Name",
  email: "user@email.com"
}));*/

localStorage.setItem("user", JSON.stringify({
  

  id: "USER_ID_FROM_DATABASE",
  name: "User Name",
  email: "user@email.com"
}));



/*localStorage.removeItem("user");*/  

});


