/* eslint-disable camelcase */

const userNameElem = document.querySelector('.user__name'); // поиск элемента имени пользователя
const userLocationElem = document.querySelector('.user__location'); // поиск элемента месторасположения
const userAvatarElem = document.querySelector('.user__avatar'); // поиск элемента картинки

// ф-ция рендерит картинку юзера, местоположение юзера, имя юзера
export const renderUserData = userData => {
  const { avatar_url, name, location } = userData; // получаем картинку, имя, локацию
  userAvatarElem.src = avatar_url; // устанавливаем картинку на элемент
  userNameElem.textContent = name; // выводим имя на страницу
  userLocationElem.textContent = location ? `from ${location}` : ''; // выводим локацию
};
