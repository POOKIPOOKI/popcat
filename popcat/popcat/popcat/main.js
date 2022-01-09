const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#popcat");


const openMouthImg = "./images/cat2.jpg";
const closeMouthImg = "./images/cat1.jpg";


const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");


popcat.addEventListener("mousedown", openMouth);
popcat.addEventListener("mouseup", closeMouth);


popcat.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

popcat.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})


function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}