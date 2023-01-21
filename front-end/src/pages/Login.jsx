import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  // const [error, setError] = useState('');
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const validation = useCallback(
    () => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
      && /^.{6,}$/.test(user.password)
      ? setDisable(false)
      : setDisable(true)),
    [user],
  );

  const login = () => {
    history.push('/produtos');
  };

  const changeState = ({ target }) => {
    const { name, value } = target;

    setUser({ ...user, [name]: value });
    validation();
  };

  useEffect(() => {
    validation();
  }, [user, validation]);

  return (
    <>
      <form>
        <label htmlFor="e-mail">
          <br />
          Email
          <input
            type="email"
            data-testid="common_login__input-email"
            name="email"
            placeholder="Digite seu email"
            onChange={ changeState }
          />
        </label>

        <label htmlFor="password">
          <br />
          Senha
          <input
            type="password"
            data-testid="common_login__input-password"
            name="password"
            placeholder="Digite sua senha"
            onChange={ changeState }
          />
        </label>

        <br />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ disable }
          onClick={ login }
        >
          Login
        </button>

        <br />
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/signup') }
        >
          Ainda não tenho conta
        </button>
      </form>
      {/* <p data-testid="common_login__element-invalid-email">{error}</p> */}
    </>
  );
}
