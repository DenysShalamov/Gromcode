/* eslint-disable no-plusplus */
const pinger = (count, period) => {
  let i = count;
  console.log('Ping');
  setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    }
  }, period);
};
