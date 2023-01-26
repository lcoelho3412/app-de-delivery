import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (element) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{element}</Router>),
    history,
  });
};

export default renderWithRouter;
