let globalVar = "Hello";
let anotherGlobalVar = "World!";

function demoFunctionScope() {
  let localVar = "Hi";
  console.log(globalVar);
  console.log(anotherGlobalVar);
  console.log(localVar);

  return `Global Variable: ${globalVar}, Another Global Variable: ${anotherGlobalVar}, Local Variable: ${localVar}`;
}

let result = demoFunctionScope();
console.log("Function return value: ");
console.log(result);

if (true) {
  let blockVar = "Greetings!";
  console.log("Block Variable: ");
  console.log(blockVar);
}

console.log("Outside: ");
try {
  console.log(blockVar);
} catch (error) {
  console.log("Error:", error.message);
}
