const eventsList = document.querySelector('.events-list');
const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');

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

const greenDivLogger = addInner.bind(null, 'div', 'green');
const greyDivLogger = addInner.bind(null, 'div', 'grey');
const greenPLogger = addInner.bind(null, 'p', 'green');
const greyPLogger = addInner.bind(null, 'p', 'grey');
const greenSpanLogger = addInner.bind(null, 'span', 'green');
const greySpanLogger = addInner.bind(null, 'span', 'grey');

const divLogger = () => {
  rectDiv.addEventListener('click', greenDivLogger);
  rectDiv.addEventListener('click', greyDivLogger, true);
  rectP.addEventListener('click', greenPLogger);
  rectP.addEventListener('click', greyPLogger, true);
  rectSpan.addEventListener('click', greenSpanLogger);
  rectSpan.addEventListener('click', greySpanLogger, true);
};

clearBtn.addEventListener('click', clearInner);
attachBtn.addEventListener('click', divLogger);
removeBtn.addEventListener('click', removeHandler);
divLogger();
