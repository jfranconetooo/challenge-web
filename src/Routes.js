import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Minimal as MinimalLayout } from './layouts';

import {
  UserList as UserListView,
  NotFound as NotFoundView
} from './views';

import {
  UserDetails as UserDetailsView
} from './views/UserList/components/UserDetails'

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/users"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MinimalLayout}
        path="/users"
      />
      <RouteWithLayout
        component={UserDetailsView}
        exact
        layout={MinimalLayout}
        path="/users/:username"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
