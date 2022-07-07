const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const [newFirstName, newLastName] = name.split(' ');
    this.firstName = newFirstName;
    this.lastName = newLastName;
  },
};
