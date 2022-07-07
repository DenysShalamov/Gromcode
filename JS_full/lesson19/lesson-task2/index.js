/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
function getOwnProps(obj) {
  const result = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      result.push(prop);
    }
  }

  return result;
}
