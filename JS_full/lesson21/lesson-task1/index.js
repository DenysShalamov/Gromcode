const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];
/**
//  * @param {object[]} tasksList
//  * @return {undefined}
//  */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  const tasksListArr = tasksList.map(elem => Object.values(elem)[0]);
  const listItemElems = tasksListArr.map(itemText => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.classList.add('list__item-checkbox');
    listItemElem.append(checkboxElem, itemText);

    return listItemElem;
  });
  listElem.append(...listItemElems);
};

renderTasks(tasks);
