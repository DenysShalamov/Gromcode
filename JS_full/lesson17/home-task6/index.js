const bind = (func, context, [arg1], [arg2]) => {
  const resultFunc = func;
  return resultFunc.apply(context, [...arg1, ...arg2]);
};
