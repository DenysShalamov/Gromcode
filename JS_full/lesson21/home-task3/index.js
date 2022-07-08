export const getTitle = function () {
  return document.querySelector('.title').textContent;
};

console.dir(getTitle());

export const getDescription = function () {
  return document.querySelector('.about').innerText;
};

console.dir(getDescription());

export const getPlans = function () {
  return document.querySelector('.plans').innerHTML;
};

console.dir(getPlans());

export const getGoal = function () {
  return document.querySelector('.goal').outerHTML;
};

console.dir(getGoal());
