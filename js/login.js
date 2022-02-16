const sidebarNav = document.querySelector(".sidebar");
const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const alertLogin = document.getElementById("alert-login");
const sidebarLogout = document.querySelector("#sidebar-logout");

const HIDDEN_CLASSNAME = "hidden";
const NONE_CLICK = "none-click";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // submit 의 특성상 새로고침을 하는데 이것을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    alertLogin.classList.add(HIDDEN_CLASSNAME);
    sidebarNav.classList.remove(NONE_CLICK)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function onLogoutClick(event) {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}
//logout 후에 저장되어있는 localstorge를 날려야 함
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    alertLogin.classList.remove(HIDDEN_CLASSNAME);
    sidebarNav.classList.add(NONE_CLICK)
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

sidebarLogout.addEventListener("click", onLogoutClick);