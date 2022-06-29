const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Den' }, { name: 'Lohn' }, { name: 'Bob' }],
  room3: [{ name: 'Jack' }, { name: 'Jack' }, { name: 'Jack' }],
};

const getPeople = obj => {
  return Object.values(obj);
};

console.log(getPeople(rooms));