/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { selectUser } from 'features/auth/authSlice';

interface ProtectedRouteProps extends RouteProps {
  roles?: string[],
  nonLogin?: boolean
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  roles, nonLogin, ...routeProps
}) => {
  const user = useAppSelector(selectUser);
  const setComponent: React.FC = () => {
    if (nonLogin) {
      if (user) {
        return <Redirect to="/" />;
      }
      return <Route {...routeProps} />;
    }
    if (user) {
      if (roles) {
        if (roles.includes(user.role)) {
          return <Route {...routeProps} />;
        }
        return <Redirect to="/" />;
      }
      return <Route {...routeProps} />;
    }
    return (
      <Redirect to="/user/login" />
    );
  };

  return <Route component={setComponent} />;
};

export default ProtectedRoute;
