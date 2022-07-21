const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    console.log(callback.apply(context, args));
  }, delay);
};
