const dayOfWeek = function (date, days) {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

// const result = dayOfWeek(new Date(), 2);
// const result = dayOfWeek(new Date(), -2);
const result = dayOfWeek(new Date());

console.log(result);
