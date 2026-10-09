let date = new Date();

let date1 = date.getTime() - 1000 * 60 * 60 * 24 * 21; // Add 7 days in milliseconds

console.log(date);
console.log(new Date(date1));