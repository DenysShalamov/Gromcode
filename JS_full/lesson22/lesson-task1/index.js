const rectDivElem = document.querySelector('.rect_div');
const rectPElem = document.querySelector('.rect_p');
const rectSpanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');

const logTarget = function (text, color) {
  eventsListElem.innerHTML += `<span style= "color: ${color}; margin-left: 8px"">${text}</span>`;
};

const logGreenDiv = () => logTarget('div', 'green');
const logGreenP = () => logTarget('p', 'green');
const logGreenSpan = () => logTarget('span', 'green');

const logGrayDiv = () => logTarget('div', 'gray');
const logGrayP = () => logTarget('p', 'gray');
const logGraySpan = () => logTarget('span', 'gray');

rectDivElem.addEventListener('click', logGreenDiv);
rectPElem.addEventListener('click', logGreenP);
rectSpanElem.addEventListener('click', logGreenSpan);

rectDivElem.addEventListener('click', logGrayDiv, true);
rectPElem.addEventListener('click', logGrayP, true);
rectSpanElem.addEventListener('click', logGraySpan, true);
// const attach = function () {
//   rectDivElem.addEventListener('click', logGreenDiv);
//   rectPElem.addEventListener('click', logGreenP);
//   rectSpanElem.addEventListener('click', logGreenSpan);

//   rectDivElem.addEventListener('click', logGrayDiv, true);
//   rectPElem.addEventListener('click', logGrayP, true);
//   rectSpanElem.addEventListener('click', logGraySpan, true);
// };

// attach();

const clear = function () {
  eventsListElem.textContent = '';
};
const clearEventList = () => clear();
clearBtn.addEventListener('click', clearEventList);

const remove = function () {
  rectDivElem.removeEventListener('click', logGreenDiv);
  rectPElem.removeEventListener('click', logGreenP);
  rectSpanElem.removeEventListener('click', logGreenSpan);

  rectDivElem.removeEventListener('click', logGrayDiv, true);
  rectPElem.removeEventListener('click', logGrayP, true);
  rectSpanElem.removeEventListener('click', logGraySpan, true);
};
const removeEvents = () => remove();
removeBtn.addEventListener('click', removeEvents);

const attachEvents = () => {
  rectDivElem.addEventListener('click', logGreenDiv);
  rectPElem.addEventListener('click', logGreenP);
  rectSpanElem.addEventListener('click', logGreenSpan);

  rectDivElem.addEventListener('click', logGrayDiv, true);
  rectPElem.addEventListener('click', logGrayP, true);
  rectSpanElem.addEventListener('click', logGraySpan, true);
};

attachBtn.addEventListener('click', attachEvents);
