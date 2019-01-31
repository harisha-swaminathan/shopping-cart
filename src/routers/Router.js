import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import ProductsPage from '../components/ProductsPage';
import NotFoundPage from '../components/NotFoundPage';
import Cart from '../components/Cart';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history=createHistory()

const appRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
      <Route path="/" component={ProductsPage} exact={true} />
      <PublicRoute path="/login" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/cart" component={Cart} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default appRouter;
