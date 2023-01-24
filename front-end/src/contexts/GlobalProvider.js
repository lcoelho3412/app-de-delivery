// import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useData from '../hooks/useData';
import GlobalContext from './GlobalContext';

export default function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider value={ useData() }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
