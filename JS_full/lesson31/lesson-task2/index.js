const asyncCalculator = num =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const square = value ** 2;
            console.log(`Squared value: ${square}`);
            resolve(square);
          }, 500);
        }),
    )
    .then(value => {
      const double = value * 2;
      console.log(`Doubled value: ${double}`);
      return double;
    });

asyncCalculator(4);
