document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password match
    if (username === "admin" && password === "cGFzc3dvcmQxMjM") {
      document.getElementById("message").textContent = "Login successful!";
      alert("Congratulations! Here's the flag: FLAG{webBasedCTFTologin}");
    } else {
      document.getElementById("message").textContent = "Incorrect username or password. Please try again.";
    }
  });
  

