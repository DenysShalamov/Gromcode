export const fetchUserData = userName => {
  //  ф-ция запроса на сервер и получаем юзера
  return fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) {
      return response.json(); // если запрос успешный то получаем юзера
    }
    throw new Error('Failed to load data'); // если ошибка при запросе выкидываем эрор
  });
};

// ф-ция запроса репозиториев юзера на сервер
export const fetchRepos = url =>
  fetch(url).then(response => {
    if (response.ok) {
      return response.json(); // если запрос успешный то получаем репо
    }
    throw new Error('Failed to load data'); // если ошибка при запросе выкидываем эрор
  });
