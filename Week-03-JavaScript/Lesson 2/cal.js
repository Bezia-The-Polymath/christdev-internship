// var x = 5;
// x = x + 4;
// console.log(x);
// console.log(x==3);
let number1 = 0;
let number2 = 0;
//document.getElementById("ans").innerHTML;
document.getElementById("number1").addEventListener("input", (e) => {
  number1 = parseInt(e.target.value);
  document.getElementById("ans").innerHTML = addNumbers(number1, number2);
});
document.getElementById("number2").addEventListener("input", (e) => {
  number2 = parseInt(e.target.value);
  document.getElementById("ans").innerHTML = addNumbers(number1, number2);
});

const addNumbers = (a, b) => {
  return a + b;
};

console.log(addNumbers(4, 9));
