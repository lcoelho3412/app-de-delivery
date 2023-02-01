import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../../services/requests';
import GlobalContext from '../../contexts/GlobalContext';

export default function LoginForm() {
  const history = useHistory();
  const { user, setUser } = useContext(GlobalContext);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState('');

  const validation = useCallback(
    () => (/\S+@\S+\.\S+/.test(user.email) && /^.{6,}$/.test(user.password)
      ? setDisable(false)
      : setDisable(true)),
    [user],
  );

  const login = async (event) => {
    event.preventDefault();

    const { email, password } = user;

    try {
      const data = await requestLogin('/login', { email, password });

      const { id, ...userData } = data;

      setUser(data);

      if (data.role === 'administrator') {
        localStorage.setItem('user', JSON.stringify(userData));

        history.push('/admin/manage');
      } else if (data.role === 'seller') {
        localStorage.setItem('user', JSON.stringify(userData));

        history.push('/seller/orders');
      } else {
        localStorage.setItem('user', JSON.stringify(userData));

        history.push('/customer/products');
      }
    } catch (e) {
      setError(e.response.data.message);
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
    <div className="login-form">
      <form>
        <label htmlFor="e-mail">
          Email
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="Digite seu email"
            data-testid="common_login__input-email"
            onChange={ changeState }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Digite sua senha"
            data-testid="common_login__input-password"
            onChange={ changeState }
          />
        </label>

        <button
          type="button"
          className="login-btn"
          data-testid="common_login__button-login"
          disabled={ disable }
          onClick={ login }
        >
          Login
        </button>

        <button
          type="button"
          className="login-register-btn"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      <p
        data-testid="common_login__element-invalid-email"
        hidden={ !failedTryLogin }
      >
        {error}
      </p>
    </div>
  );
}
