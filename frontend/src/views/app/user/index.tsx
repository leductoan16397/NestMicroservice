import ProtectedRoute from 'components/ProtectedRoute/authHelper';
import SpinComponent from 'components/spin/spin';
import { ForgotPasswordPath, LoginPath, ResetPasswordPath } from 'constants/path';
import React, { Suspense } from 'react';
import {
  Route, Switch, Redirect, RouteComponentProps,
} from 'react-router-dom';

const LoginView = React.lazy(() => import('./login/login'));
const ForgotPasswordView = React.lazy(() => import('./forgotPassword'));
const ResetPasswordView = React.lazy(() => import('./resetPassword'));
const ViewError = React.lazy(() => import('views/app/error404'));

const User: React.FC<RouteComponentProps> = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}`} to={`${match.url}/${LoginPath}`} />
    <ProtectedRoute
      nonLogin
      path={`${match.url}/${LoginPath}`}
      render={(props) => (
        <Suspense fallback={<SpinComponent />}>
          <LoginView {...props} />
        </Suspense>
      )}
    />
    <Route
      path={`${match.url}/${ForgotPasswordPath}`}
      render={(props) => (
        <Suspense fallback={<SpinComponent />}>
          <ForgotPasswordView {...props} />
        </Suspense>
      )}
    />
    <Route
      path={`${match.url}/${ResetPasswordPath}`}
      render={(props) => (
        <Suspense fallback={<SpinComponent />}>
          <ResetPasswordView {...props} />
        </Suspense>
      )}
    />
    <Route
      render={(props) => (
        <Suspense fallback={<SpinComponent />}>
          <ViewError {...props} />
        </Suspense>
      )}
    />
  </Switch>
);

export default User;
