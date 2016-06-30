function displayNextImage() {
    x = (x === images.length -
        1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function
displayPreviousImage() {
    x = (x <= 0) ?
        images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval
        (displayNextImage, 6000);
}
var images = [],
    x = -1;
images[0] = "images/10.jpg";
images[1] = "images/burger-1156564_640.jpg";
images[2] = "images/burger-868145_640.jpg";
images[3] = "images/hamburger-1414423_640.jpg";
images[4] = "images/food.jpeg";
