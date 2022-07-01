// algo
// 1. все элементы число и округлить
// 2. фильтр по наличию букв в элементах
// 3. убрать пробелы
// 4. конкат $

const entryArr = ['  1.9', '  1 dollar', 17, '16.4'];

const cleanTransactionsList = function (arrTrans) {
  return arrTrans
    .filter(elem => String(elem).toUpperCase() === String(elem).toLowerCase())
    .map(elem => '$' + Number(elem).toFixed(2).trim());
    
};

console.log(cleanTransactionsList(entryArr));