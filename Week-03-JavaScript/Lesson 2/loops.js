//     console.log("Linked Properly");

let houses = [
  { name: "duplex", address: "Buea" },
  { name: "bungalow", address: "Limbe" },
  { name: "appartment", address: "Douala" },
  { name: "studio", address: "Bamenda" },
  { name: "storey", address: "Yaounde" },
];

// for, while & do while loops
let house;
for (var i = 0; i < houses.length; i++) {
  house = document.createElement("div");
  house.classList.add("house");
  house.innerHTML = `<h2> ${houses[i].name}</h2> <p>${houses[i].address}</p>`;
    document.getElementById("houses").appendChild(house);
    // console.log(houses[i].name);
    // console.log(houses[i].address);
    //setTimeout(() => { }, 1000);
    
}

i = 0;
while (i < houses.length) {
    house = document.createElement("div");
    house.classList.add("house");
    house.innerHTML = `<h2> ${houses[i].name}</h2> <p>${houses[i].address}</p>`;
    document.getElementById("houses").appendChild(house);
    i++;
}

i = 0;
do {
  house = document.createElement("div");
  house.classList.add("house");
  house.innerHTML = `<h2> ${houses[i].name}</h2> <p>${houses[i].address}</p>`;
  document.getElementById("houses").appendChild(house);
  i++;
} while (i < houses.length);