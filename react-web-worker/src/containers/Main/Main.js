import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const WelcomePage = lazy(() => import('@src/pages/WelcomePage/WelcomePage'));

const Main = () => <Suspense fallback={<div>Loading</div>}>
  <Switch>
    <Route exact path='/' component={WelcomePage} />
    <Route render={() => <div>404</div>} />
  </Switch>
</Suspense>;

export default Main;