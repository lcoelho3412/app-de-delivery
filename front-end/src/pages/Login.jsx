import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../contexts/GlobalContext';
import { loginService } from '../services/requests';

export default function Login() {
  const history = useHistory();
  const { user, setUser } = useContext(GlobalContext);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState('');

  const validation = useCallback(
    () => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
      && /^.{6,}$/.test(user.password)
      ? setDisable(false)
      : setDisable(true)),
    [user],
  );

  const login = async (event) => {
    event.preventDefault();

    const { email, password } = user;

    try {
      const data = await loginService({ email, password });

      if (data.message) throw new Error(data.message);

      history.push('/customer/products');

      localStorage.setItem('token', token);
    } catch (e) {
      setError(e.message);
      setFailedTryLogin(true);
    }
  };

  const changeState = ({ target }) => {
    const { name, value } = target;

    setUser({ ...user, [name]: value });
    validation();
  };

  useEffect(() => {
    validation();
  }, [user, validation]);

  if (history.location.pathname === '/') history.push('/login');

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
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      <p data-testid="common_login__element-invalid-email" hidden={ !failedTryLogin }>
        {error}
      </p>
    </>
  );
}
