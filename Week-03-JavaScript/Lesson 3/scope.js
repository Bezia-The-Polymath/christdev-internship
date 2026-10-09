// Example 1: Gloabel Scope
let globalVar = "I am a global variable";

function exampleFunction() {
  console.log(globalVar); // Accessible here
}
exampleFunction();

// Example 2: Local Scope
function localScopeExample() {
  let localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}
localScopeExample();

// Example 3: Block Scope
{
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible here
}