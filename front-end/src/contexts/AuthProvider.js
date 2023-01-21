import { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log('teste de useEffect');
    setUser('meu user');
  }, []);

  return <AuthContext.Provider value={ user }>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
