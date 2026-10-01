// var x = 5;
// x = x + 4;
// console.log(x);
// console.log(x==3);
let color1 = "#00ff00";
let color2 = "#ff0000";
//document.getElementById("ans").innerHTML;
document.getElementById("color1").addEventListener("input", (e) => {
  color1 = (e.target.value);
  document.getElementById("grad").style.background = getLinearGradient(color1, color2);
});
document.getElementById("color2").addEventListener("input", (e) => {
  color2 = (e.target.value);
  document.getElementById("grad").style.background = getLinearGradient(color1, color2);
});

const getLinearGradient = (a, b) => {
  return `linear-gradient(${a}, ${b})`;
};

document.getElementById("grad").style.background = getLinearGradient(color1, color2);

