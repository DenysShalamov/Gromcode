function saveFuncCalls(func) {
  const memory = [];

  return function withMemory(...args) {
    memory.push(args);
    withMemory.callsHistory = memory;
    return func.apply(this, args);
  };
}
