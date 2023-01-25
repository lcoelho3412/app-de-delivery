import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { request } from '../services/requests';

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

  const validation = useCallback(
    () => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(newUser.email)
      && /^.{6,}$/.test(newUser.password)
      && /^.{,12}$/.test(newUser.name)
      ? setDisable(false)
      : setDisable(true)),
    [newUser],
  );

  const changeState = ({ target }) => {
    const { name, value } = target;

    setNewUser({ ...newUser, [name]: value });
    validation();
  };

  const cadastrar = async (event) => {
    event.preventDefault();

    const { name, email, password } = newUser;

    try {
      await request('/register', { name, email, password });

      history.push('/');
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
          onClick={ cadastrar }
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
