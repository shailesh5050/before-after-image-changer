const slider = document.querySelector(".slider");
const container = document.querySelector(".container");
const before = document.querySelector(".before-img-container");
const after = document.querySelector(".after-img-container");

let slideMoves =(e)=>{
    let xPos = e.layerX;
    before.style.width = xPos + "px";
}

container.addEventListener("mousemove",(e)=>{
slideMoves(e);
})


