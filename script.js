// Sadə giriş yoxlaması
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "muellim" && pass === "1234") {
        window.location.href = "admin.html";
    } else if (user === "telebe" && pass === "111") {
        window.location.href = "telebe.html";
    } else {
        alert("İstifadəçi adı və ya parol yanlışdır!");
    }
}