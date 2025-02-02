document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("message").style.display = "block";
});

document.getElementById("noButton").addEventListener("mouseover", function () {
    let button = document.getElementById("noButton");
    let maxX = window.innerWidth - button.clientWidth;
    let maxY = window.innerHeight - button.clientHeight;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});
