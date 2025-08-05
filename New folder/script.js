document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Retrieve input values
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple example validation (customize as needed)
  if (username === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  // You could send data to your backend here
  alert(`Welcome, ${username}!`);
  // window.location.href = "/dashboard"; // Redirect on success, for example
});
