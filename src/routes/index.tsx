import React from 'react';
import {
  BrowserRouter as Router,
  // Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { RouteWrapper as Route } from './route';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/asdf" exact component={Home} />
        <Route path="/home/:id" exact component={Home} isPrivate />
        <Route path="/home" exact component={Home} isPrivate />
        <Route
          path="/private"
          isPrivate
          component={() => <div>voce esta em area restrita</div>}
        />
        <Route path="/dashboard" component={Dashboard} isPrivate />

        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/" exact component={Home} />
        {/* <Route path="/404" component={() => <strong>404 Not Found</strong>} />
      <Redirect to="/404" /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
