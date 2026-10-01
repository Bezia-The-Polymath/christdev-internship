let fruits = ["apple", "pear", "plum", "guava", "melon", "orange"];

// adds and remove from end
fruits.push("mango");
fruits.pop();
//removes from front
fruits.shift();
// undo removes from front
fruits.unshift();

fruits.forEach((fruit) => {
  console.log(`The fruit is ${fruit}`);
});

//console.log(fruits);

// install tabnine

let age = 18;

if (age > 18) {
  console.log(`The age is ${age} and it is greater than 18`);
} else if (age == 18) {
  console.log(`The age is ${age} and it is equal to 18`);
} else {
  console.log(`The age is ${age} and it is less than 18`);
}
