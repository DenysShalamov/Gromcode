export const getAdults = obj => {
  const resObj = {};

  for (const key in obj) {
    if (obj[key] >= 18) {
      resObj[key] = obj[key];
    }
  }
  return resObj;
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
