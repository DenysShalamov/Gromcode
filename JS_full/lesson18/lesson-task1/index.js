const event = {
  guests: [
    {
      name: 'John',
      age: 18,
      email: 'example@server.com',
    },
    {
      name: 'Tom',
      age: 17,
      email: 'example1@server.com',
    },
  ],
  message: 'Welcome to the party!',
  getInvitation() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitation());
