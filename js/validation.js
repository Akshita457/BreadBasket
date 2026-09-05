

document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let role = document.getElementById("registerRole").value;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("registerEmail").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    let message = document.getElementById("registerMessage");


    message.textContent = "";
    message.className = "form-message";



    if (role === "") {

        message.textContent = "Please select your role.";
        message.classList.add("error-message");

        return;
    }



    if (name === "") {

        message.textContent = "Please enter your name.";
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



    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        message.textContent = "Please enter a valid 10-digit phone number.";
        message.classList.add("error-message");

        return;
    }



    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        message.classList.add("error-message");

        return;
    }



    if (password !== confirmPassword) {

        message.textContent = "Passwords do not match.";
        message.classList.add("error-message");

        return;
    }


    if (!terms) {

        message.textContent =
            "Please accept the Terms & Conditions.";

        message.classList.add("error-message");

        return;
    }


    message.textContent =
        "Account created successfully!";

    message.classList.add("success-message");


    // Clear form
    document.getElementById("registerForm").reset();

});