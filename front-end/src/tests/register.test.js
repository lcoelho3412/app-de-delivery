import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Register from '../pages/Register';

describe('The register page', () => {
  const nameTestId = 'common_register__input-name';
  const emailTestId = 'common_register__input-email';
  const buttonTestId = 'common_register__button-register';
  const passwordTestId = 'common_register__input-password';
  const validName = 'John Doe Smith';
  const validEmail = 'validemail@email.com';
  const validPasword = 'valid_password';
  /*  const registeredName = 'Delivery App Admin';
  const registeredEmail = 'adm@deliveryapp.com';
  const registeredPasword = '--adm2@21!!--'; */

  it('should have the register button disabled by default', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    );

    const button = screen.getByTestId(buttonTestId);

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });

  it('should enable the register button if all fields are filled correctly', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    );

    const button = screen.getByTestId(buttonTestId);
    const nameInput = screen.getByTestId(nameTestId);
    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    expect(button).toBeDisabled();

    userEvent.type(nameInput, validName);
    expect(button).toBeDisabled();

    userEvent.type(emailInput, validEmail);
    expect(button).toBeDisabled();

    userEvent.type(passwordInput, validPasword);
    expect(button).not.toBeDisabled();
  });
/*
  it('should show a user already registered message if the user already exists', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    );

    const alreadyRegistered = screen.getByText(/email já cadastrado/i);

    const button = screen.getByTestId(buttonTestId);
    const nameInput = screen.getByTestId(nameTestId);
    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    expect(button).toBeDisabled();

    userEvent.type(nameInput, validName);
    expect(button).toBeDisabled();

    userEvent.type(emailInput, validEmail);
    expect(button).toBeDisabled();

    userEvent.type(passwordInput, validPasword);
    expect(button).not.toBeDisabled();
  }); */
});
