document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password }),
        });

        if (!response.ok) {
            const message = await response.text();
            alert(message);
            return;
        }

        const user = await response.json();
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Вы успешно вошли!");
        window.location.href = "profile.html";
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Ошибка входа. Попробуйте позже.");
    }
});
