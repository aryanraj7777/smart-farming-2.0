document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            if (username && password) {
                localStorage.setItem("loggedIn", true);
                window.location.href = "index.html";
            } else {
                alert("Please enter valid credentials");
            }
        });
    }

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("loggedIn");
            window.location.href = "login.html";
        });
    }
});
