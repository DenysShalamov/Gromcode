const btnElemsArr = Array.from(document.querySelectorAll('.pagination__page'));

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

btnElemsArr.map(elem => elem.addEventListener('click', handleClick));
