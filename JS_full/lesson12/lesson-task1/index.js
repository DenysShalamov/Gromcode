const calc = exp => {
  const a = exp.split(' ');
  let result;
  switch (a[1]) {
    case '+':
      result =  Number(a[0]) + Number(a[2]);
    break;
    case '-':
      result =  a[0] - a[2];
    break;
    case '*':
      result =  a[0] * a[2];
    break;
    case '/':
      result =  a[0] / a[2];
    break;
  }

  return `${exp} = ${result}`;
};

console.log(calc('4 - 1'));
