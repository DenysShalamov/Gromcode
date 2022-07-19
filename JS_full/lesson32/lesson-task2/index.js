const servers = ['https://server.com/eu', 'https://server.com/us', 'https://server.com/au'];

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url => {
  return new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });
};

const getUserASAP = userId => {
  const userUrls = servers.map(url => url + `/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));
