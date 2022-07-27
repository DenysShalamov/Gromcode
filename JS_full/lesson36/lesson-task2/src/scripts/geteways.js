//  ф-ция запроса на сервер и получаем юзера
export const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (response.ok) {
    const userData = await response.json();
    return userData; // если запрос успешный то получаем юзера
  }

  throw new Error('Failed to load data'); // если ошибка при запросе выкидываем эрор
};

// ф-ция запроса репозиториев юзера на сервер
export const fetchRepos = async url => {
  const response = fetch(url);

  if (response.ok) {
    const repoData = await response.json();
    return repoData; // если запрос успешный то получаем репо
  }

  throw new Error('Failed to load data'); // если ошибка при запросе выкидываем эрор
};
