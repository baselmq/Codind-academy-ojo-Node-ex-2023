const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// question number 1

readline.question(`Do you want to print hello world? `, () => {
  console.log(`hello world`);
  readline.close();
});

// question number 2

global.globalString = "node script.js arg1 arg2";
console.log(globalString.split(" ").slice(2).join(" "));

// question number 3

global.setTimeout(() => {
  console.log("Hello world");
}, 2000);

// question number 4

setInterval(() => {
  console.log("Hello World");
}, 2000);

// question number 5
console.warn("Warning: Something went wrong");
