document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Authentication with specified credentials
    if (username === "selene" && password === "selene@0152") {
        // Redirect to PST.html after successful login
        window.location.href = "PST.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
