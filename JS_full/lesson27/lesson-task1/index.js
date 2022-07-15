const getLocalStorageData = function () {
  return Object.entries(localStorage).reduce((obj, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...obj,
      [key]: newValue,
    };
  }, {});
};

localStorage.setItem('myObj', JSON.stringify({ name: 'Tom', age: 17 }));
localStorage.setItem('myStr', JSON.stringify('Hello, world!'));
localStorage.setItem('myArr', JSON.stringify([1, 2, 3]));

const result = getLocalStorageData();
console.log(result);
