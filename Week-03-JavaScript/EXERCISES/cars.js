let cars = [
  { name: "Ben", Brand: "Lambo" },
  { name: "Desire", Brand: "Ferrari" },
  { name: "Martha", Brand: "ford" },
  { name: "Jude", Brand: "Benz" },
  { name: "Lilian", Brand: "Tesla" },
];

let i = 0;
let car;
while (i < cars.length) {
  car = document.createElement("div");
  car.classList.add("car");
  car.innerHTML = `<h2> ${cars[i].name}</h2> <p>${cars[i].Brand}</p>`;
  document.getElementById("cars").appendChild(car);
  i++;
}
