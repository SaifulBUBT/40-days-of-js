function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}
function main() {
  console.log("Main");

  setTimeout(f1, 2000);
  setTimeout(f3, 1500);

  new Promise((resolve, reject) => {
    resolve("I am promise, right after f1 and f3!");
  }).then((result) => console.log(result));

  new Promise((resolve, reject) => {
    resolve("I am resolved promise after promise");
  }).then((result) => console.log(result));

  f2();
}
main();
