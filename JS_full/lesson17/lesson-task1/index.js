// const user = {
//   getFullName(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName('John', 'Doe'));
