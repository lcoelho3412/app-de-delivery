// data-testid login
const login = {
  input_email: 'common_login__input-email',
  input_password: 'common_login__input-password',
  button_login: 'common_login__button-login',
  button_register: 'common_login__button-register',
  element_invalid: 'common_login__element-invalid-email',
};

// data-testid register
const register = {
  input_name: 'common_register__input-name',
  input_email: 'common_register__input-email',
  input_password: 'common_register__input-password',
  button_register: 'common_register__button-register',
  element_invalid: 'common_register__element-invalid_register',
};

// usuarios validos e invalidos
const user = {
  valid_email: 'adm@deliveryapp.com',
  valid_password: '--adm2@21!!--',
  invalid_email: 'test@deliveryapp.com',
  invalid_password: 'senhatest',
};

module.exports = { login, register, user };
