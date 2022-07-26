const listElem = document.querySelector('.repo-list'); // получаем список ul

// ф-ция чистит список репозиториев
export const cleanReposList = () => {
  listElem.innerHTML = ''; // если были данные в списке => удаляем
};

// ф-ция рендерит информацию репозиториев юзера на страницу
// получаем массив обїектов
export const renderRepos = reposList => {
  // итерируем массив и на каждой итерации создаем лист ітем с название репозитория
  const reposListElem = reposList.map(({ name }) => {
    const listElem = document.createElement('li'); // создаем єлемент лист айтема
    listElem.classList.add('repo-list__item'); // добавляем класс
    listElem.textContent = name; // добавляем имя репозитория в лист айтем
    return listElem;
  });
  cleanReposList();
  listElem.append(...reposListElem); // добавляем лист айтемы в список
};
