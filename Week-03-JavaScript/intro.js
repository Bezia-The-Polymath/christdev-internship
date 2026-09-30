const turnred = (id) => {
  document.getElementById(id).style.color = "green";
};
document
  .getElementById("thirdHeading")
  .addEventListener("mouseover", (event) => {
    event.target.style.color = "blue";
    event.target.innerHTML = "We have hovered on our first Heading";
  });
document.getElementById("third").addEventListener("mouseover", (event) => {
  event.target.classList.toggle("green");
  event.target.classList.toggle("red");
});
// mouseover
document.getElementById("thirdHeading").addEventListener("click", (event) => {
  event.target.style.color = "brown";
});

console.log("The page has loaded!");
/*document.getElementById("firstHeading").style.color = "green"; */

Array.from(document.getElementsByClassName("red")).forEach((element) => {
  element.style.color = "red";
});
Array.from(document.getElementsByClassName("blue")).forEach((element) => {
  element.style.color = "blue";
});
