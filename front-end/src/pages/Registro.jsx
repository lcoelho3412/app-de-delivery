import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Registro() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const changeState = ({ target }) => {
    const { name, value } = target;

    setNewUser({ ...newUser, [name]: value });
  };

  const cadastrar = () => {
    const nome = /[a-zA-Z]{3,}/.test(newUser.nome);
    const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      newUser.email,
    );
    const password = /^.{6,}/.test(newUser.password);

    if (!nome) {
      setError('Preencha o campo nome');
    } else if (!email) {
      setError('Preencha o campo email');
    } else if (!password) {
      setError('Preencha o campo password');
    } else if (
      nome.length === 0
      || email.length === 0
      || password.length === 0
    ) {
      setError('Preencha todos os campos');
    } else {
      alert('Usuário cadatrado com sucesso!');

      history.push('/');
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
            name="username"
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
        >
          Cadastrar
        </button>
      </form>

      <p>
        Já tem uma conta ?
        <Link to="/">Entre</Link>
      </p>

      <p data-testid="common_register__element-invalid_register">{error}</p>
    </>
  );
}
