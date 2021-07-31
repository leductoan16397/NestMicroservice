/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { selectUser } from 'features/user/userSlice';
import Unauthorized from 'views/app/unauthorized';

interface ProtectedRouteProps extends RouteProps {
  roles?: string[],
  nonLogin?: boolean;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  roles, nonLogin, redirectPath, ...routeProps
}) => {
  const user = useAppSelector(selectUser);
  const setComponent: React.FC = () => {
    if (nonLogin) {
      if (user) {
        return <Redirect to={redirectPath || '/'} />;
      }
      return <Route {...routeProps} />;
    }
    if (user) {
      if (roles) {
        if (roles.includes(user.role)) {
          return <Route {...routeProps} />;
        }
        return <Unauthorized />;
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
