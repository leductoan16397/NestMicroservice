/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAdminSelector } from 'admin/hooks';
import { selectAdminUser } from 'admin/features/user/userSlice';
import Unauthorized from 'views/admin/unauthorized';

interface ProtectedRouteProps extends RouteProps {
  roles?: string[],
  nonLogin?: boolean;
  redirectPath?: string;
}

const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({
  roles, nonLogin, ...routeProps
}) => {
  const user = useAdminSelector(selectAdminUser);
  const setComponent: React.FC = () => {
    if (nonLogin) {
      if (user) {
        return <Redirect to="/admin" />;
      }
      return <Route {...routeProps} />;
    }
    if (user) {
      if (roles) {
        if (user.roles.some((role: string) => roles.includes(role))) {
          return <Route {...routeProps} />;
        }
        return <Unauthorized />;
      }
      return <Route {...routeProps} />;
    }
    return (
      <Redirect to="/admin/login" />
    );
  };

  return <Route component={setComponent} />;
};

export default AdminProtectedRoute;
