function login() {
    const nameEl = document.querySelecter("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
}
