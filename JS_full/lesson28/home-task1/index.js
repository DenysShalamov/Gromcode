function shmoment(initValue) {
  let newDataValue = new Date(initValue);
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  return {
    add(interval, value) {
      switch (String(interval).toLowerCase()) {
        case 'years':
          newDataValue.setFullYear(newDataValue.getFullYear() + value);
          return this;
        case 'months':
          newDataValue.setMonth(newDataValue.getMonth() + value);
          return this;
        case 'days':
          newDataValue.setDate(newDataValue.getDate() + value);
          return this;
        case 'hours':
          newDataValue.setHours(newDataValue.getHours() + value);
          return this;
        case 'minutes':
          newDataValue.setMinutes(newDataValue.getMinutes() + value);
          return this;
        case 'seconds':
          newDataValue.setSeconds(newDataValue.getSeconds() + value);
          return this;
        case 'milliseconds':
          newDataValue.setMilliseconds(newDataValue.getMilliseconds() + value);
          return this;
        default:
          newDataValue = undefined;
          break;
      }
      return newDataValue;
    },
    subtract(interval, value) {
      switch (String(interval).toLowerCase()) {
        case 'years':
          newDataValue.setFullYear(newDataValue.getFullYear() - value);
          return this;
        case 'months':
          newDataValue.setMonth(newDataValue.getMonth() - value);
          return this;
        case 'days':
          newDataValue.setDate(newDataValue.getDate() - value);
          return this;
        case 'hours':
          newDataValue.setHours(newDataValue.getHours() - value);
          return this;
        case 'minutes':
          newDataValue.setMinutes(newDataValue.getMinutes() - value);
          return this;
        case 'seconds':
          newDataValue.setSeconds(newDataValue.getSeconds() - value);
          return this;
        case 'milliseconds':
          newDataValue.setMilliseconds(newDataValue.getMilliseconds() - value);
          return this;
        default:
          newDataValue = undefined;
          break;
      }
      return newDataValue;
    },
    result() {
      return newDataValue;
    },
  };
}
