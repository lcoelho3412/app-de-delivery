import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthProvider';
import Routes from './routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
