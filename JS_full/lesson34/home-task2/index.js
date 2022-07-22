const emailInputElem = document.querySelector('#email');
const nameInputElem = document.querySelector('#name');
const passwordInputElem = document.querySelector('#password');

const btnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');

const formElem = document.querySelector('.login-form');

const baseUrl = 'https://62d6fb0b51e6e8f06f16d24a.mockapi.io/users';

const isValid = () => {
  if (
    emailInputElem.reportValidity() &&
    passwordInputElem.reportValidity() &&
    nameInputElem.reportValidity()
  ) {
    btnElem.disabled = false;
  }
  errorElem.textContent = '';
};

const sendForm = formData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
};

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (obj, [field, value]) => ({ ...obj, [field]: value }),
    {},
  );
  console.log(formData);
  sendForm(formData)
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));
      formElem.reset();
      btnElem.disabled = true;
    });
};

formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', isValid);
