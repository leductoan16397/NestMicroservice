/* eslint-disable import/no-unresolved */
import SpinComponent from 'components/spin/spin';
import { ForgotPassword, Login, ResetPassword } from 'constants/path';
import React, { Suspense } from 'react';
import {
  Route, Switch, Redirect, RouteComponentProps,
} from 'react-router-dom';

// import UserLayout from 'layout/UserLayout';

const LoginView = React.lazy(() => import('./login'));
const ForgotPasswordView = React.lazy(() => import('./forgotPassword'));
const ResetPasswordView = React.lazy(() => import('./resetPassword'));
const ViewError = React.lazy(() => import('views/error404'));

const User: React.FC<RouteComponentProps> = ({ match }) => (
  <Suspense fallback={<SpinComponent />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/${Login}`} />
      <Route
        path={`${match.url}/${Login}`}
        component={LoginView}
      />
      <Route
        path={`${match.url}/${ForgotPassword}`}
        component={ForgotPasswordView}
      />
      <Route
        path={`${match.url}/${ResetPassword}`}
        component={ResetPasswordView}
      />
      <Route
        component={ViewError}
      />
    </Switch>
  </Suspense>
);

export default User;
