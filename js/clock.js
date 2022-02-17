const clock = document.querySelector("#js-clock h2");

function getTime() {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();