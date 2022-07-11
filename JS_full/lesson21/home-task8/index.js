export const finishList = function () {
  const listItemAppend = document.createElement('li');
  listItemAppend.textContent = '8';
  document.querySelector('.list').append(listItemAppend);

  const listItemPrepend = document.createElement('li');
  listItemPrepend.textContent = '1';
  document.querySelector('.list').prepend(listItemPrepend);

  const listItemBefore = document.createElement('li');
  const listItemAfter = document.createElement('li');
  listItemBefore.textContent = '4';
  listItemAfter.textContent = '6';
  document.querySelector('.special').before(listItemBefore);
  document.querySelector('.special').after(listItemAfter);
};

finishList();
