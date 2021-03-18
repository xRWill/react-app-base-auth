import React, { useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { isAuthenticated, isLoading, signIn } = useAuth();

  if (isAuthenticated) return <Redirect to="/" />;

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSign = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    signIn({
      username: loginRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <form onSubmit={handleSign}>
      <img src={logo} alt="App Logo" />
      <input ref={loginRef} placeholder="Login" />
      <input type="password" ref={passwordRef} placeholder="Senha" />
      <button>{isLoading ? 'Carregando...' : 'Entrar'}</button>
      <Link to="/register">Criar conta</Link>
    </form>
  );
};

export default SignIn;
