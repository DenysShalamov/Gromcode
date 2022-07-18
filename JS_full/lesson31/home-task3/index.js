// in number
// out promise

const delay = interval =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
delay(3000).then(() => console.log('Done'));
