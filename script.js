document.getElementById("yesButton").addEventListener("click", function () {
    alert("This is your official invitation to be my Valentine's date. \n\nMake sure to bring this invitation on the day itself. 💖\n\nWe had a very hectic semester, and I would like to make this break memorable and fun by spending a day together. ❤️");
});

document.getElementById("noButton").addEventListener("mouseover", function () {
    let button = document.getElementById("noButton");
    let maxX = window.innerWidth - button.clientWidth;
    let maxY = window.innerHeight - button.clientHeight;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});
