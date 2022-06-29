const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Den' }, { name: 'Lohn' }, { name: 'Bob' }],
  room3: [{ name: 'Jack' }, { name: 'Jack' }, { name: 'Jack' }],
};

const getPeople = obj => {
  return Object.values(obj)
    .reduce((acc, elem) => acc.concat(elem), [])
    .map(obj => Object.values(obj))
    .reduce((acc, elem) => acc.concat(elem), []);
};

console.log(getPeople(rooms));
console.log(rooms);
