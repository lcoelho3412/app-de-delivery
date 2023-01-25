import React from 'react';
import { render, screen } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter'; */
import Login from '../pages/Login';

describe('Tests Login page', () => {
  it('tests if email field is rendered', () => {
    render(<Login />);
    const emailField = screen.getByText(/email/i);
    expect(emailField.type).toBe('email');
    expect(emailField).toBeInTheDocument();
  });
});
