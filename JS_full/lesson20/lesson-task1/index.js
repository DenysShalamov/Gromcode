export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return {
      name: '',
      age: null,
    };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }

    this.age = newAge;
    if (newAge >= 25) {
      return this.requestNewPhoto();
    }

    return newAge;
  }
}

const user1 = new User('Tom', 17);
console.log(user1);
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
const user2 = new User();
console.log(User.createEmpty());
