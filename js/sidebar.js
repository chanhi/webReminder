const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".write-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text"),
mainHome = body.querySelector(".home");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () =>{
    sidebar.classList.remove("close");
});
mainHome.addEventListener("click", () =>{
    sidebar.classList.add("close");
});

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
    }else{
        modeText.innerText = "Darkmode"
    }
});
