import React from 'react';
import './App.css';
// import './style';
import GlobalProvider from './contexts/GlobalProvider';
import Routes from './routes';

export default function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}
