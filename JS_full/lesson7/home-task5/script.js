const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] - amount < 0
    ? -1
    : balances[clients.indexOf(client)] - amount;
