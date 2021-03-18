import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../contexts/auth';
import { Container, Content, Profile, Logout } from './styles';

const Header: React.FC = () => {
  const { user: profile, signOut } = useAuth();

  const handleSignOut = () => signOut();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="APP Logo" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile?.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Logout onClick={handleSignOut}>Sair</Logout>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
