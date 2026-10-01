function createShape() {
    let shape = document.createElement("div");
    shape.classList.add("shape");
    shape.dataset.creationTime = Date.now();
    let ptop = Math.random() * 100;
    let pleft = Math.random() * 100;
    shape.style.top = `calc(${ptop}% - 50px)`;
    shape.style.left = `calc(${pleft}% - 50px)`;
    document.getElementById("screen").appendChild(shape);
}

createShape();
getShape();

function getShape() {
    Array.from(document.getElementsByClassName("shape")).forEach((element) => {
        element.addEventListener("click", (event) => {
            let creationTime = parseInt(event.currentTarget.dataset.creationTime);
            let clickTime = Date.now();
            let timeDifference = (clickTime - creationTime) / 1000;
            let result = document.createElement("p");
            result.textContent = timeDifference;
            document.getElementById("results").appendChild(result);
            //event.target.classList.toggle("hide");
            event.target.style.display = "none";
            createShape();
            getShape();
        })
    })
};