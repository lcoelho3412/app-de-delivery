import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import testId from './mocks';

describe('Testes para o componente <Login />', () => {
  it('Crie um local para que o usuário insira seu email e senha', () => {
    renderWithRouter(<App />, ['/login']);

    const email = screen.getByTestId(testId.login.input_email);
    const password = screen.getByTestId(testId.login.input_password);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('Crie um botão com o texto \'Login\'', () => {
    renderWithRouter(<App />, ['/login']);

    const button = screen.getByRole('button', {
      name: /login/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
    renderWithRouter(<App />, ['/login']);

    const button = screen.getByTestId(testId.login.button_login);
    expect(button).toBeDisabled();

    const email = screen.getByTestId(testId.login.input_email);
    const password = screen.getByTestId(testId.login.input_password);

    userEvent.type(email, testId.user.valid_email);
    userEvent.type(password, testId.user.valid_password);

    expect(button).toBeEnabled();
  });
});
