document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const name = document.getElementById("name").value.trim();
    const nickname = document.getElementById("nickname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;

    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    if (/\s/.test(login) || /\s/.test(password) || /\s/.test(nickname) || /\s/.test(phone)) {
        alert("Поля не должны содержать пробелы!");
        return;
    }

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password, name, nickname, phone, gender, registrationDate: new Date().toLocaleDateString() }),
        });

        if (!response.ok) {
            const message = await response.text();
            alert(message);
            return;
        }

        alert("Регистрация успешна!");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Ошибка регистрации. Попробуйте позже.");
    }
});

function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let password = '';
    for (let i = 0; i < 16; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

document.getElementById("generatePassword").addEventListener("click", () => {
    const generatedPassword = generateRandomPassword();
    document.getElementById("password").value = generatedPassword;
    document.getElementById("confirmPassword").value = generatedPassword;
});

function togglePasswordVisibility(passwordFieldId, toggleIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = document.getElementById(toggleIconId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "❌"; 
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "👁️"; 
    }
}

document.getElementById("togglePassword").addEventListener("click", () => togglePasswordVisibility("password", "togglePassword"));
document.getElementById("toggleConfirmPassword").addEventListener("click", () => togglePasswordVisibility("confirmPassword", "toggleConfirmPassword"));
