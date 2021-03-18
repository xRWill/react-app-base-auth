import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';
import { Container } from './styles';

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Container>
      {isAuthenticated ? (
        <>
          <p>
            Bem vindo {user?.name} {'<'}
            {user?.email}
            {'>'}
          </p>
        </>
      ) : (
        <p>
          Faça <Link to="/login">Login</Link> ou{' '}
          <Link to="/register">registre-se</Link>
        </p>
      )}

      <br />
      <p>Você está na HOME </p>
    </Container>
  );
};

export default withRouter(Home);
