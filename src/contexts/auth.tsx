import React, { createContext, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';

import api from '../services/api';

interface IUser {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: IUser | null;
  isLoading: boolean;
  signIn(user: IUser): Promise<void>;
  signUp(user: IUser): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const signIn = async (userData: { username: string; password: string }) => {
    setIsLoading(true);
    // console.log(userData);

    const response = await api.post(
      `${process.env.REACT_APP_API_URL}/login`,
      userData
    );
    // console.log(response);
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);

    setIsAuthenticated(true);
    history?.push('/dashboard');
    setIsLoading(false);
  };

  const signUp = async (userData: IUser) => {
    setIsLoading(true);

    const response = await api.post(
      `${process.env.REACT_APP_API_URL}/register`,
      userData
    );

    if (response.data.token && response.data.user) {
      setUser(response.data.user);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      localStorage.setItem('@App:user', JSON.stringify(response.data.user));
      localStorage.setItem('@App:token', response.data.token);
    }

    history?.push('/login');
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    setIsAuthenticated(false);
    setUser(null);
    api.defaults.headers.Authorization = undefined;
    await localStorage.clear();
    history?.push('/');
    setIsLoading(false);
  };

  // if (isLoading) return <h1>Carregando...</h1>;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => useContext(AuthContext);
