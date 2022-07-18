// in string
// out object promise
const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    }

    setTimeout(() => {
      resolve({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
      });
    }, 1000);
  });

  return request;
};

requestUserData('broken')
  .then(user => console.log(user))
  .catch(error => console.log(error));
