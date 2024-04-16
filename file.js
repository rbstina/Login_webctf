document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username and password match
  if (username === "admin" && password === "password") {
    document.getElementById("message").textContent = "Login successful! May contain another file flag.html";
      } else {
    document.getElementById("message").textContent = "Incorrect username or password. Please try again .";
  }
});
