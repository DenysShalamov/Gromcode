export const finishForm = function () {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  formElem.prepend(inputElem);

  const passwordElem = document.querySelector('password');
  passwordElem.setAttribute('type', 'password');
};

// finishForm();
