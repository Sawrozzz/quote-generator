
const body = document.body;
const toggleButton = document.getElementById("toggleButton");
// var a = document.querySelector("#toggleButton");
// a.innerHTML = "dark"
let mode = localStorage.getItem("mode");
if (mode === "dark") {
    body.classList.add("dark");
} else {
    body.classList.add("light");
}

function toggleMode() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("mode", "dark");
        var a = document.querySelector("#toggleButton");
a.innerHTML = "Light Mode"
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("mode", "light");
        var a = document.querySelector("#toggleButton");
        a.innerHTML = "Dark Mode"
    }
}
toggleButton.addEventListener("click", toggleMode);
