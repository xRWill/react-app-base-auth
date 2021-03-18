import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
