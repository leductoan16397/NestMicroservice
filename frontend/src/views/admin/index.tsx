// import AdminProtectedRoute from 'components/ProtectedRoute/adminProtectedRoute';
import SpinComponent from 'components/spin/spin';
import { LoginPath } from 'constants/path';
import React, { ReactElement, Suspense } from 'react';
import {
  Route, RouteComponentProps, Switch,
} from 'react-router-dom';

const LoginAdminView = React.lazy(() => import('views/admin/login'));
const AdminView = React.lazy(() => import('views/admin/views'));
const ViewError = React.lazy(() => import('views/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => (
  <Switch>
    {/* <AdminProtectedRoute
      nonLogin
      path={`${match.url}/${LoginPath}`}
      roles={['admin', 'user']}
      render={(props) => (
        <Suspense fallback={<SpinComponent />}>
          <LoginAdminView {...props} />
        </Suspense>
      )}
    /> */}
    <Route
      path={[`${match.url}/${LoginPath}`]}
      render={(props) => (
        <Suspense fallback={<SpinComponent />}>
          <LoginAdminView {...props} />
        </Suspense>
      )}
    />
    <Route
      path={[`${match.url}/`]}
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
export default App;
