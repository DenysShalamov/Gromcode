function filterNames(arr, text) {
  return arr.filter((elem) => elem.includes(text) && elem.length > 5);
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Vanya'], 'ya'));
