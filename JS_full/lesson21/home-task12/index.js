export const getSection = function (num) {
  return document.querySelector(`span[data-number="${num}"]`).closest('.box').dataset.section;
};

console.dir(getSection(1));
