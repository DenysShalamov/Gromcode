export const finishForm = function () {
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  document.querySelector('.login-form').prepend(inputElem);

  document.querySelector('input[name="password"]').setAttribute('type', 'password');
};

finishForm();
