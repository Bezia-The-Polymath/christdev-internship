changeName();

function changeName(name) {
  // var name = prompt("What is your name?");
  document.getElementById("name").innerHTML = `<h1>My name is ${name}</h1>`;
}

const adder = () => {
  const a = parseInt(document.getElementById("number1").value);
  const b = parseInt(document.getElementById("number2").value);
  const answer = addNum(a, b);
  document.getElementById("sum").innerText = answer;
};

const addNum = function (a, b) {
  return a + b;
};

//     ASSIGNMENT

const area = () => {
  const a = parseInt(document.getElementById("length").value);
  const b = parseInt(document.getElementById("width").value);
  const answer = multiply(a, b);
  document.getElementById("mul").innerText = answer;
};

const multiply = function (a, b) {
  return a * b;
};