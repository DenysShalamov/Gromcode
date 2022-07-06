function defer(func, ms) {
  return function () {
    // eslint-disable-next-line prefer-rest-params
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const sayHi = () => {
  console.log('Hi');
};

// sayHi();

const deferredSayHi = defer(sayHi, 1000);

deferredSayHi();
