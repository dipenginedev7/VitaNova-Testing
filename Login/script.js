document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values entered by the user
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Hardcoded credentials for demo login
        // const validEmail = "arghyadip.info@gmail.com";
        // const validPassword = "arghya@vitanova7";

        if (email === validEmail && password === validPassword) {
            alert("Login successful! Redirecting to Home...");
            window.location.href = "../Home/index.html"; // Redirect to index.html inside Home folder
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
