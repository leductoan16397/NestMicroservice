// import AdminProtectedRoute from 'components/ProtectedRoute/adminProtectedRoute';
import { setUser } from 'admin/features/user/userSlice';
import { useAdminDispatch } from 'admin/hooks';
import AdminProtectedRoute from 'components/ProtectedRoute/adminProtectedRoute';
import SpinComponent from 'components/spin/spin';
import { LoginPath } from 'constants/path';
import React, { ReactElement, Suspense, useEffect } from 'react';
import {
  Route, RouteComponentProps, Switch,
} from 'react-router-dom';

const LoginAdminView = React.lazy(() => import('views/admin/login'));
const AdminView = React.lazy(() => import('views/admin/views'));
const ViewError = React.lazy(() => import('views/admin/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => {
  const dispatch = useAdminDispatch();
  useEffect(() => {
    dispatch(setUser(null));
  }, [dispatch]);

  return (
    <Switch>
      <AdminProtectedRoute
        nonLogin
        redirectPath="/admin"
        path={`${match.url}/${LoginPath}`}
        roles={['admin', 'user']}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <LoginAdminView {...props} />
          </Suspense>
        )}
      />
      <AdminProtectedRoute
        redirectPath={`${match.url}/${LoginPath}`}
        path={`${match.url}/`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <AdminView {...props} />
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
};
export default App;
