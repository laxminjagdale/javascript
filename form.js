   const form = document.getElementById("loginForm");

        form.addEventListener("submit", function(event) {

            event.preventDefault();  // stop form submission

            // Get values
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            // Get error divs
            const usernameError = document.getElementById("usernameError");
            const passwordError = document.getElementById("passwordError");

            // Clear previous errors
            usernameError.textContent = "";
            passwordError.textContent = "";

            let isValid = true;

            // Username validation
            if (username === "") {
                usernameError.textContent = "Username cannot be empty";
                isValid = false;
            }

            // Password validation
            if (password === "") {
                passwordError.textContent = "Password cannot be empty";
                isValid = false;
            } 
            else if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                isValid = false;
            }

            // If valid
            if (isValid) {
                alert("Form submitted successfully!");
            }

        });