import React from 'react';
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
  useHistory,
} from 'react-router-dom';

import { useAuth } from '../contexts/auth';
import AuthLayout from '../pages/_layout/auth';
import DefaultLayout from '../pages/_layout/default';

interface IRoute {
  component: React.ElementType;
  //   // path: string;
  //   // exact?: boolean;
  //   // props?: unknown;
  //   name?: string;
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<IRoute & RouteProps> = ({
  component: Component,
  isPrivate = false, // PrivateRoute component test
  ...rest
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  // const history = useHistory();

  if (isLoading) return <h1>Carregaaaaa..</h1>;

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/login" />;
  }

  // if (isAuthenticated && !isPrivate) {
  //   <Redirect to="/dashboard" />;
  // }

  type LayoutProps = {
    children: React.ReactNode;
  };

  const Layout: React.FC<LayoutProps & RouteComponentProps> = isAuthenticated
    ? DefaultLayout
    : AuthLayout;

  // console.log('rest:', Component, isPrivate, rest);

  return (
    <Route
      {...rest}
      render={(props: React.PropsWithChildren<RouteComponentProps>) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    ></Route>
  );
};

export { RouteWrapper };
