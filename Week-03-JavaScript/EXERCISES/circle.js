Array.from(document.getElementsByClassName("circle")).forEach((element) => {
  element.addEventListener("click", (event) => {
    event.target.classList.add("fade");
  });
});
