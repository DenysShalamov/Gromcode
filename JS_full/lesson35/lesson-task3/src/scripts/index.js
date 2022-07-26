import { fetchUserData, fetchRepos } from './geteways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

// Юзер пустышка для отображения при первой загрузке сайта
const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10002',
  name: '',
  location: '',
};

renderUserData(defaultUser); // отрисовка дефолтных значений

const showUserBtnElem = document.querySelector('.name-form__btn'); // элемент кнопки
const userNameInputElem = document.querySelector('.name-form__input'); // элемент инпута

// колбэк для обработчика кнопки
const onSearchUser = () => {
  showSpinner(); // показываем спиннер
  cleanReposList(); // при каждом новом поиске юзера и репо старые данные удаляем
  const userName = userNameInputElem.value; // получаем имя пользователя с инпута
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData); // подписываемся на результат вызова сервера и вызываем ф-цию отрисовки информации юзера.
      return userData.repos_url; // получаем ссылку на репозитории юзера
    })
    .then(url => fetchRepos(url)) // вызываем ф-цию поиска репо по ссылке
    .then(reposList => {
      renderRepos(reposList); // подписываемся на промис и рендерим список репозиториев
      hideSpinner(); // прячем спинер
    })
    .catch(err => {
      hideSpinner(); // прячем спинер
      alert(err.message); // если ошибка при запросах выводим алерт с текстом ошибки
    });
};

showUserBtnElem.addEventListener('click', onSearchUser); // обработчик клика на кнопке
