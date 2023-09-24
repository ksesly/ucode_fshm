document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const registrationMessage = document.getElementById("registrationMessage");
    const passwordMismatchMessage = document.getElementById("passwordMismatchMessage");

    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(registrationForm);

        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            passwordMismatchMessage.textContent = "Passwords do not match!";
            return; // Prevent form submission
        } else {
            passwordMismatchMessage.textContent = ""; // Clear any previous error message
        }

        try {
            const response = await fetch("/register", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                registrationMessage.textContent = "Registration successful!";
                registrationForm.reset();
            } else {
                registrationMessage.textContent = data.message;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
