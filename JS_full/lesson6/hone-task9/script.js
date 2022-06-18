/* eslint-disable no-param-reassign */
const withdraw = function (clients, balances, client, amount) {
  if (balances[clients.indexOf(client)] - amount < 0) {
    return -1;
  }
  balances[clients.indexOf(client)] -= amount;
  return balances[clients.indexOf(client)];
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
