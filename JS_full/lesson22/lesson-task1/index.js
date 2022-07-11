const rectDivElem = document.querySelector('.rect_div');
const rectPElem = document.querySelector('.rect_p');
const rectSpanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style= "color: ${color}; margin-left: 8px"">${text}</span>`;
};

const clearEventList = () => {
  eventsListElem.textContent = '';
};

const removeEvents = () => {
  rectDivElem.removeEventListener('click', logGreenDiv);
  rectDivElem.removeEventListener('click', logGrayDiv, true);
  rectPElem.removeEventListener('click', logGreenP);
  rectPElem.removeEventListener('click', logGrayP, true);
  rectSpanElem.removeEventListener('click', logGreenSpan);
  rectSpanElem.removeEventListener('click', logGraySpan, true);
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');
const logGrayDiv = logTarget.bind(null, 'div', 'gray');
const logGrayP = logTarget.bind(null, 'p', 'gray');
const logGraySpan = logTarget.bind(null, 'span', 'gray');

const attach = () => {
  rectDivElem.addEventListener('click', logGreenDiv);
  rectDivElem.addEventListener('click', logGrayDiv, true);
  rectPElem.addEventListener('click', logGreenP);
  rectPElem.addEventListener('click', logGrayP, true);
  rectSpanElem.addEventListener('click', logGreenSpan);
  rectSpanElem.addEventListener('click', logGraySpan, true);
};

clearBtn.addEventListener('click', clearEventList);
removeBtn.addEventListener('click', removeEvents);
attachBtn.addEventListener('click', attach);
attach();
