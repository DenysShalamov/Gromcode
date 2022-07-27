// ф-ция делает запрос на сервер за данными юзера
// input user Id
// output obj
const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    if (!response.ok) {
      return null;
    }

    const userData = await response.json();
    return userData;
  } catch (e) {
    throw new Error('Failed to get user data');
  }
};

fetchUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message));
