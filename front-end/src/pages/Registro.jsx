import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerService } from '../services/requests';

export default function Registro() {
  const history = useHistory();
  const [error, setError] = useState('');
  // const [disable, setDisable] = useState(true);

  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [newUser, setNewUser] = useState({
    uname: '',
    email: '',
    password: '',
  });

  const changeState = ({ target }) => {
    const { name, value } = target;

    setNewUser({ ...newUser, [name]: value });
    // validation();
  };

  const cadastrar = async (event) => {
    event.preventDefault();

    const { name, email, password } = newUser;

    try {
      const data = await registerService({ name, email, password });

      if (data.message) throw new Error(data.message);

      history.push('/');
    } catch (e) {
      setError(e.message);
      setFailedTryLogin(true);
    }
  };

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
          type="button"
          data-testid="common_register__button-register"
          onClick={ cadastrar }
          // disabled={ disable }
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
