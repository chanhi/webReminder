const checkBody = document.querySelector("body");
const homeTopBox = document.querySelector(".home-top-box");
const homeBottomBox = document.querySelector(".home-bottom-box");
const topImage = document.querySelector("#top-image");
const modeButton = document.querySelector(".toggle-switch");

function paintImageTop() {
    const IMG_NUMBER  = 4;
    const SELECTED_NUM = Math.floor(Math.random() * IMG_NUMBER);
    if(checkBody.classList.contains("dark")) {
        topImage.src = `images_dark/${SELECTED_NUM + 1}.jpg`
    }else {
        topImage.src = `images/${SELECTED_NUM + 1}.jpg`
    }
    
}

//function paintImageBottom() {}

paintImageTop();
modeButton.addEventListener("click", paintImageTop)