let pple = {
  John: {
    name: "John",
    age: 30,
    city: "New York",
    image: "image.jpg",
  },
  Pete: {
    name: "Pete",
    age: 25,
    city: "Paris",
    image: "image.jpg",
  },
  cynthia: {
    name: "Cynthia",
    age: 35,
    city: "London",
    image: "image.jpg",
  },
  janis: {
    name: "Janis",
    age: 28,
    city: "Berlin",
    image: "image.jpg",
  },
  fuhrer: {
    name: "Fuhrer",
    age: 40,
    city: "Berlin",
    image: "image.jpg",
  },
};

console.log(pple.John.name); // Output: John
console.log(pple.Pete.age); // Output: 25
console.log(pple.cynthia.city); // Output: London
console.log(pple.janis.name); // Output: Janis
console.log(pple.fuhrer.age); // Output: 40

Object.values(pple).forEach((person) => {
  const persondiv = document.createElement("div");
  persondiv.classList.add("person");
  persondiv.innerHTML = `<img src="${person.image}" alt="${person.name}"><h2>${person.name}</h2><p>Age: ${person.age}</p><p>City: ${person.city}</p>`;
  document.getElementById("pple").appendChild(persondiv);
});

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    cost: 20000,
    price: function() {
        return this.cost * 1.2;
    }
}

let land = {
    address: "123 Main St",
    length: 100,
    width: 50,
    costpersquaremeter: 15000,
    area: function() {
        return this.length * this.width;
    },
    price: function () {
        return this.area() * this.costpersquaremeter;
    }
}
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2020
console.log(land.price());
console.log(land.area());