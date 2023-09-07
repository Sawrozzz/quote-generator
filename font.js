var increaseButton = document.getElementById("increaseFont");
var decreaseButton = document.getElementById("decreaseFont");
var textElement = document.getElementById("quoteDisplay");

// Initial font size in pixels
var currentFontSize = 16;

increaseButton.addEventListener("click", function () {
    currentFontSize += 3; // Increase font size by 2 pixels
    textElement.style.fontSize = currentFontSize + "px";
});

decreaseButton.addEventListener("click", function () {
    if (currentFontSize > 8) { // Ensure font size doesn't go below 8 pixels
        currentFontSize -= 3; // Decrease font size by 2 pixels
        textElement.style.fontSize = currentFontSize + "px";
    }
});
