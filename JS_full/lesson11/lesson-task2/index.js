const entryArr = [{ name: 'Tom' }, { name: 'Bob' }, { name: 'Ann' }];

const sortArrIncrease = arr => arr.sort((a, b) => a.name.localeCompare(b.name));

const sortArrDecrease = arr => arr.sort((a, b) => b.name.localeCompare(a.name));

const sortContacts = function (contactsArr, dir = true) {
  if (!Array.isArray(contactsArr)) {
    return null;
  }
  if (dir) {
    return sortArrIncrease(contactsArr);
  }
  return sortArrDecrease(contactsArr);
};

console.log(sortContacts(entryArr, false));

// console.log(sortArrIncrease(entryArr));
