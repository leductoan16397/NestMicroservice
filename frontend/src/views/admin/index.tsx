import SpinComponent from 'components/spin/spin';
import { LoginPath, PostCompanyPath, PostJobPath } from 'constants/path';
import AdminLayout from 'layout/adminLayout/adminLayout';
import React, { ReactElement, Suspense } from 'react';
import {
  Route, RouteComponentProps, Switch,
} from 'react-router-dom';

const LoginAdminView = React.lazy(() => import('views/admin/login'));
const AdminHomeView = React.lazy(() => import('views/admin/home'));
const PostJobView = React.lazy(() => import('views/admin/postJob'));
const PostCompanyView = React.lazy(() => import('views/admin/postCompany'));
const ViewError = React.lazy(() => import('views/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => (
  <AdminLayout>
    <Switch>
      {/* <Redirect exact from={`${match.url}`} to={`${match.url}/${LoginPath}`} /> */}
      <Route
        exact
        path={[`${match.url}/`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <AdminHomeView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`${match.url}/${LoginPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <LoginAdminView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`${match.url}/${PostJobPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostJobView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`${match.url}/${PostCompanyPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostCompanyView {...props} />
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
  </AdminLayout>
);
export default App;
