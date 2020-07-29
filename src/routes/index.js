import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/Auth/SignIn';

import Dashboard from '../pages/App/Dashboard';

export default function Routes() {
  return (
    <Switch>
      {/* Auth Routes */}
      <Route path="/" exact component={SignIn} />

      {/* Academy Routes */}
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
    </Switch>
  );
}
