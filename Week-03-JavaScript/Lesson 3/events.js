document.getElementById("action").addEventListener("mouseenter", (event) => {
    event.target.innerText = "qwerty";
});

document.getElementById("action").addEventListener("mouseleave", (event) => {
    event.target.innerText = "Click me again!";
    console.log("Left!");
});