/* eslint-disable */

// 1 foo undef
// 2 foo : 1
// 3 function bar
// 4
let foo = 1;

function bar() {
  if (!foo) {
     foo = 10;
  }

  return foo;
}

foo = bar();

console.log(foo = bar());