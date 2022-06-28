const getAdults = usersObj => {
  return Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
};
console.log(getAdults({ John: 18, Bob: 17, Tom: 20 }));
