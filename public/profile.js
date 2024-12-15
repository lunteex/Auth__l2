document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Вы не авторизованы!");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("userLogin").textContent = currentUser.login;
    document.getElementById("userName").textContent = currentUser.name || "Не указано";
    document.getElementById("userNickname").textContent = currentUser.nickname || "Не указано";
    document.getElementById("userPhone").textContent = currentUser.phone || "Не указано";
    document.getElementById("userGender").textContent = currentUser.gender || "Не указано";
    document.getElementById("registrationDate").textContent = currentUser.registrationDate;

    document.querySelector("button").addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        alert("Вы вышли из аккаунта!");
        window.location.href = "login.html";
    });
});
