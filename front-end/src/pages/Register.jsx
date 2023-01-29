import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { requestPost } from '../services/requests';

export default function Registro() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validation = useCallback(() => {
    const email = /\S+@\S+\.\S+/.test(newUser.email);
    const doze = 12;
    const seis = 6;

    if (
      email
      && newUser.password.length >= seis
      && newUser.name.length >= doze
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [newUser]);

  const changeState = ({ target }) => {
    const { name, value } = target;

    setNewUser({ ...newUser, [name]: value });
    validation();
  };

  const register = async (event) => {
    event.preventDefault();

    const { name, email, password } = newUser;

    try {
      await requestPost('/register', {
        name,
        email,
        password,
        role: 'customer',
      });

      history.push('/customer/products');
    } catch (e) {
      setError(e.response.data.message);
      setFailedTryLogin(true);
    }
  };

  useEffect(() => {
    validation();
  }, [newUser, validation]);

  return (
    <>
      <form>
        <h2>Cadastro</h2>

        <label htmlFor="e-mail">
          <br />
          Nome
          <input
            type="text"
            data-testid="common_register__input-name"
            name="name"
            onChange={ changeState }
          />
        </label>

        <label htmlFor="e-mail">
          <br />
          Email
          <input
            type="email"
            data-testid="common_register__input-email"
            name="email"
            onChange={ changeState }
          />
        </label>

        <label htmlFor="password">
          <br />
          Password
          <input
            type="password"
            data-testid="common_register__input-password"
            name="password"
            onChange={ changeState }
          />
        </label>

        <br />
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disable }
          onClick={ (event) => register(event) }
        >
          Cadastrar
        </button>
      </form>

      <p>
        Já tem uma conta ?
        <Link to="/">Entre</Link>
      </p>

      <p
        data-testid="common_register__element-invalid_register"
        hidden={ !failedTryLogin }
      >
        {error}
      </p>
    </>
  );
}
