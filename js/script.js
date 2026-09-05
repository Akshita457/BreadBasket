

document.getElementById("loginForm").addEventListener("submit", function(event) {

   
    event.preventDefault();


    let role = document.getElementById("role").value;
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let message = document.getElementById("loginMessage");


    message.textContent = "";
    message.className = "form-message";


    if (role === "") {

        message.textContent = "Please select your role.";
        message.classList.add("error-message");

        return;
    }


    if (email === "") {

        message.textContent = "Please enter your email address.";
        message.classList.add("error-message");

        return;
    }


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        message.textContent = "Please enter a valid email address.";
        message.classList.add("error-message");

        return;
    }



    if (password === "") {

        message.textContent = "Please enter your password.";
        message.classList.add("error-message");

        return;
    }


    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        message.classList.add("error-message");

        return;
    }



    message.textContent = "Login successful!";
    message.classList.add("success-message");



    setTimeout(function() {

        if (role === "donor") {

            window.location.href = "donor/dashboard.html";

        }

        else if (role === "ngo") {

            window.location.href = "ngo/dashboard.html";

        }

        else if (role === "admin") {

            window.location.href = "admin/dashboard.html";

        }

    }, 1000);

});