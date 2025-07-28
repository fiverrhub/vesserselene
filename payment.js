document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Authentication check
    if (username === "selene" && password === "selene@0152") {
        // Redirect to PST.html hosted on GitHub
        window.location.href = "https://fiverrhub.github.io/vesserselene/PST.html";
            window.location.href = "https://fiverrhub.github.io/vesserselene/events.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
