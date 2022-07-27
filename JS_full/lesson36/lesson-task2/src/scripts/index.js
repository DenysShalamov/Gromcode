import { fetchUserData, fetchRepos } from './geteways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

// Юзер пустышка для отображения при первой загрузке сайта
const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser); // отрисовка дефолтных значений

const showUserBtnElem = document.querySelector('.name-form__btn'); // элемент кнопки
const userNameInputElem = document.querySelector('.name-form__input'); // элемент инпута

// колбэк для обработчика кнопки
const onSearchUser = async () => {
  showSpinner(); // показываем спиннер
  cleanReposList(); // при каждом новом поиске юзера и репо старые данные удаляем
  // здесь могут появляться ошибки
  const userName = userNameInputElem.value; // получаем имя пользователя с инпута
  try {
    const userData = await fetchUserData(userName); // получаем данные узера (ф=ция возвращает промис но с await получаем значение промиса => obj)
    renderUserData(userData); // выводим данные юзера на страницу
    const reposList = await fetchRepos(userData.repos_url); // вызываем ф-цию поиска репо по ссылке
    renderRepos(reposList); // выводим список репо на страницу
  } catch (err) {
    alert(err.message); // если ошибка при запросах выводим алерт с текстом ошибки
  } finally {
    hideSpinner(); // прячем спинер
  }

  //
  //   .then(userData => {
  //     renderUserData(userData); // подписываемся на результат вызова сервера и вызываем ф-цию отрисовки информации юзера.
  //     return userData.repos_url; // получаем ссылку на репозитории юзера
  //   })
  //   .then(url => fetchRepos(url)) // вызываем ф-цию поиска репо по ссылке
  //   .then(reposList => {
  //     renderRepos(reposList); // подписываемся на промис и рендерим список репозиториев
  //     hideSpinner(); // прячем спинер
  //   })
  //   .catch(err => {
  //     hideSpinner(); // прячем спинер
  //     alert(err.message); // если ошибка при запросах выводим алерт с текстом ошибки
  //   });
};

showUserBtnElem.addEventListener('click', onSearchUser); // обработчик клика на кнопке
