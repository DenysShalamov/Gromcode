// put your code here
let goodNumber = 17;
let anotherNumber = goodNumber;

anotherNumber = 77;

console.log('goodNumber', goodNumber);
console.log('anotherNumber', anotherNumber);

let customer = {
  name: "John",
  age: 17,
};

let anotherCustomer = customer;

anotherCustomer.age = 20;

console.log(customer.age);
console.log(anotherCustomer.age);
