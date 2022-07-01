 export const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] - amount < 0
    ? -1
    : balances[clients.indexOf(client)] - amount;

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));