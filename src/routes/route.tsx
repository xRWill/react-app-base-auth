import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

type IRoute = {
  component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
  name?: string;
  props?: unknown;
  // isPrivate?: boolean;
};

const RouteWrapper: React.FC<IRoute> = ({
  // eslint-disable-next-line react/prop-types
  component: Component,
  // eslint-disable-next-line react/prop-types
  // isPrivate = false,
  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export { RouteWrapper };
