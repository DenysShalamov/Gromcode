const getRandomNumber = (from, to) => from + Math.random() * (to - from);
const requestUserData = (userId, callback) => {
  const randomDelay = getRandomNumber(1000, 3000);
  const user = {
    userId: `${userId}`,
    email: `${userId}@example.com`,
  };
  setTimeout(() => {
    if (userId === 'broken') {
      callback(null, 'Failed to load user data');
    }
    callback(user);
  }, randomDelay);
};
