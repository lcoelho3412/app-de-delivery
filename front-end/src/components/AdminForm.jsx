import React, { useCallback, useEffect, useState } from 'react';
import { requestPostAdmin } from '../services/requests';

export default function NewUserForm() {
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const validation = useCallback(() => {
    const email = /\S+@\S+\.\S+/.test(newUser.email);
    const twelve = 12;
    const six = 6;

    if (
      email
      && newUser.password.length >= six
      && newUser.name.length >= twelve
      && newUser.role.length > 2
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

    const { name, email, password, role } = newUser;

    try {
      const { token } = JSON.parse(localStorage.getItem('user'));

      await requestPostAdmin(
        '/admin/manage',
        { name, email, password, role },
        token,
      );

      setFailedTryLogin(true);
      setError('Conta criada com sucesso');

      const tres = 3000;
      setTimeout(() => {
        setError('');
      }, tres);
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
        <h2>Cadastrar novo usuário</h2>

        <label htmlFor="name">
          <br />
          Nome
          <input
            type="text"
            data-testid="admin_manage__input-name"
            name="name"
            onChange={ changeState }
          />
        </label>

        <label htmlFor="e-mail">
          <br />
          Email
          <input
            type="email"
            data-testid="admin_manage__input-email"
            name="email"
            onChange={ changeState }
          />
        </label>

        <label htmlFor="password">
          <br />
          Password
          <input
            type="password"
            data-testid="admin_manage__input-password"
            name="password"
            onChange={ changeState }
          />
        </label>

        <br />
        <label htmlFor="role">
          Tipo
          <select
            name="role"
            data-testid="admin_manage__select-role"
            defaultValue="empty"
            onChange={ changeState }
          >
            <option value="empty" disabled hidden>
              {' '}
            </option>
            <option value="customer">Cliente</option>
            <option value="administrator">Pessoa administra</option>
            <option value="seller">Pessoa vendedora</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ disable }
          onClick={ (event) => register(event) }
        >
          Cadastrar
        </button>
      </form>

      <p
        data-testid="admin_manage__element-invalid-register"
        hidden={ !failedTryLogin }
      >
        {error}
      </p>
    </>
  );
}
