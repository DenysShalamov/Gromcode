const spinerElem = document.querySelector('.spinner'); // находим спиннер

// ф-ция показывает спиннер когда грузится запрос сервер
export const showSpinner = () => {
  spinerElem.classList.remove('spinner_hidden'); // удаляем класс который прячет спиннер
};

// ф-ция спрячет спиннер когда загрузился запрос сервера
export const hideSpinner = () => {
  spinerElem.classList.add('spinner_hidden'); // добавляем класс который прячет спиннер
};
