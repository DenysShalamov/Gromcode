// input -
// output object with methods

function createLogger() {
  const memory = [];
  return {
    warn(message) {
      memory.unshift({ message, type: 'warn', dateTime: new Date() });
    },
    error(message) {
      memory.unshift({ message, type: 'error', dateTime: new Date() });
    },
    log(message) {
      memory.unshift({ message, type: 'log', dateTime: new Date() });
    },
    getRecords(typeMessages) {
      return typeMessages === undefined
        ? memory
        : memory.filter(elemObj => elemObj.type === typeMessages);
    },
  };
}

const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords('error'));

const logger2 = createLogger();
logger2.log('User logged in');
logger2.warn('User is tring to ented restricted page');
logger2.log('User logged out');
logger2.error('Unexpected error on the site');
