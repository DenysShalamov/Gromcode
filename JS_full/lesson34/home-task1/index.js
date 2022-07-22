const baseUrl = 'https://62d6fb0b51e6e8f06f16d24a.mockapi.io/users';

function getUsersList() {
  return fetch(baseUrl).then(response => response.json());
}

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}
const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};
const newUserData2 = {
  email: 'cool@email.com',
  firstName: 'Tom',
  lastName: 'Felton',
  age: 30,
};
// const newUserData3 = {
//   email: 'cool@email.com',
//   firstName: 'Ann',
//   lastName: 'Mol',
//   age: 32,
// };

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

createUser(newUserData).then(console.log('created first user'));
createUser(newUserData2).then(console.log('created second user'));

// getUsersList().then(users => {
//   console.log(users);
// });

// getUserById('2').then(userData => {
//   console.log(userData);
// });

// createUser(newUserData3).then(console.log('created third user'));

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
