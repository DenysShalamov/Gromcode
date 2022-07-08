/* eslint-disable max-classes-per-file */
class User {
  // _id = ''
  // _name = ''
  // _sessionId = ''

  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(elem => Object.values(elem)[1]);
  }

  getUserIds() {
    return this._users.map(elem => Object.values(elem)[0]);
  }

  getUserNameById(id) {
    const findedUser = this._users.map(elem => Object.values(elem)).find(elem => elem[0] === id);
    return findedUser[1];
  }
}

const user1 = new User('123', 'Tom', '123123');
const user2 = new User('321', 'Bob', '3456346');
const user3 = new User('345', 'John', '456457');
const user4 = new User('567', 'Ann', '456456');
// console.log(user1);
const users = [user1, user2, user3, user4];

const usersRepo = new UserRepository(users);
// console.log(usersRepo);
const names = usersRepo.getUserNames();
const ids = usersRepo.getUserIds();
const nameById = usersRepo.getUserNameById('123');
// console.log(names);
// console.log(ids);
console.log(nameById);
