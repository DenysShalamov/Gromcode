const eventsList = document.querySelector('.events-list'); //получаем ноду ивент листа
const rectDiv = document.querySelector('.rect_div'); // получаем эелемент див
const rectP = document.querySelector('.rect_p'); // получаем элемент п
const rectSpan = document.querySelector('.rect_span'); // получаем элемент спан

const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');

const addInner = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const clearInner = () => {
  eventsList.innerHTML = '';
};

const removeHandler = () => {
  rectDiv.removeEventListener('click', greyDivLogger, true);
  rectDiv.removeEventListener('click', greenDivLogger);
  rectP.removeEventListener('click', greenPLogger);
  rectP.removeEventListener('click', greyPLogger, true);
  rectSpan.removeEventListener('click', greenSpanLogger);
  rectSpan.removeEventListener('click', greySpanLogger, true);
};

const greenDivLogger = addInner.bind(null, 'div', 'green'); // функция иннер для зеленого див
const greyDivLogger = addInner.bind(null, 'div', 'grey'); // функция иннер для серого див
const greenPLogger = addInner.bind(null, 'p', 'green'); // функция иннер для зеленого параграфа
const greyPLogger = addInner.bind(null, 'p', 'grey'); // функция иннер для серого параграфа
const greenSpanLogger = addInner.bind(null, 'span', 'green'); // функция иннер для зеленого спана
const greySpanLogger = addInner.bind(null, 'span', 'grey'); // функция иннер для зеленого спана

const divLogger = () => {
  rectDiv.addEventListener('click', greenDivLogger); // вешаем слушатель на див
  rectDiv.addEventListener('click', greyDivLogger, true); // вешаем слушатель на див
  rectP.addEventListener('click', greenPLogger); // вешаем слушатель на параграф
  rectP.addEventListener('click', greyPLogger, true); // вешаем слушатель на параграф
  rectSpan.addEventListener('click', greenSpanLogger); // вешаем слушатель на спан
  rectSpan.addEventListener('click', greySpanLogger, true); // вешаем слушатель на спан
};

clearBtn.addEventListener('click', clearInner); // чистим логгер
attachBtn.addEventListener('click', divLogger); // добавляем обработчик
removeBtn.addEventListener('click', removeHandler); // удаляет обработчик
divLogger();

// const rectDivElem = document.querySelector('.rect_div');
// const rectPElem = document.querySelector('.rect_p');
// const rectSpanElem = document.querySelector('.rect_span');
// const eventsListElem = document.querySelector('.events-list');
// const clearBtn = document.querySelector('.clear-btn');
// const removeBtn = document.querySelector('.remove-handlers-btn');
// const attachBtn = document.querySelector('.attach-handlers-btn');

// const logTarget = (text, color) => {
//   eventsListElem.innerHTML += `<span style= "color: ${color}; margin-left: 8px"">${text}</span>`;
// };

// const clearEventList = () => {
//   eventsListElem.textContent = '';
// };

// const removeEvents = () => {
//   rectDivElem.removeEventListener('click', logGreenDiv);
//   rectDivElem.removeEventListener('click', logGrayDiv, true);
//   rectPElem.removeEventListener('click', logGreenP);
//   rectPElem.removeEventListener('click', logGrayP, true);
//   rectSpanElem.removeEventListener('click', logGreenSpan);
//   rectSpanElem.removeEventListener('click', logGraySpan, true);
// };

// const logGreenDiv = logTarget.bind(null, 'div', 'green');
// const logGreenP = logTarget.bind(null, 'p', 'green');
// const logGreenSpan = logTarget.bind(null, 'span', 'green');
// const logGrayDiv = logTarget.bind(null, 'div', 'gray');
// const logGrayP = logTarget.bind(null, 'p', 'gray');
// const logGraySpan = logTarget.bind(null, 'span', 'gray');

// const attach = () => {
//   rectDivElem.addEventListener('click', logGreenDiv);
//   rectDivElem.addEventListener('click', logGrayDiv, true);
//   rectPElem.addEventListener('click', logGreenP);
//   rectPElem.addEventListener('click', logGrayP, true);
//   rectSpanElem.addEventListener('click', logGreenSpan);
//   rectSpanElem.addEventListener('click', logGraySpan, true);
// };

// clearBtn.addEventListener('click', clearEventList);
// removeBtn.addEventListener('click', removeEvents);
// attachBtn.addEventListener('click', attach);
// attach();
