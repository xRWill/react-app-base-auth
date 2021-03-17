import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { RouteWrapper as Route } from './route';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <div>voce esta na HOME</div>} />
        <Route path="/login" component={() => <div>voce esta no login</div>} />
        <Route
          path="/register"
          component={() => <div>voce esta se registrando</div>}
        />

        <Route path="/404" component={() => <strong>404 Not Found</strong>} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
