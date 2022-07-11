/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export const squaredNumbers = function () {
  const listElemArr = Array.from(document.querySelectorAll('.number'));
  listElemArr.map(elem => (elem.dataset.squaredNumber = elem.dataset.number ** 2));
};

squaredNumbers();
