const btnElems = Array.from(document.querySelectorAll('.btn'));

const handleClick = event => {
  console.log(event.target.textContent);
};

btnElems.map(elem => elem.addEventListener('click', handleClick));
