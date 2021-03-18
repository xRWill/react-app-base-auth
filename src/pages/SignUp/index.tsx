import React, { useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../contexts/auth';

const SignUp: React.FC = () => {
  const { isAuthenticated, isLoading, signUp } = useAuth();

  if (isAuthenticated) return <Redirect to="/" />;

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const handleSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signUp({
      username: loginRef.current?.value,
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
    });
  };

  return (
    <form>
      <img src={logo} alt="App Logo" />
      <input ref={nameRef} placeholder="Nome completo" />
      <input ref={emailRef} placeholder="Email" />
      <input ref={loginRef} placeholder="Nome de Usuário" />
      <input type="password" ref={passwordRef} placeholder="Senha" />

      <input
        type="password"
        ref={passwordConfirmationRef}
        placeholder="Confirme a Senha"
      />
      <button onClick={handleSignUp}>
        {isLoading ? 'Carregando...' : 'Registrar'}
      </button>
      <Link to="/login">Já tenho conta</Link>
    </form>
  );
};

export default SignUp;
