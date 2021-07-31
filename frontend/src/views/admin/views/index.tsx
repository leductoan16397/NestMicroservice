import AdminProtectedRoute from 'components/ProtectedRoute/adminProtectedRoute';
import SpinComponent from 'components/spin/spin';
import {
  PostCompanyPath, PostJobPath, PostRecruiterManagerPath, PostRecruiterPath,
} from 'constants/path';
import AdminLayout from 'layout/adminLayout/adminLayout';
import React, { ReactElement, Suspense } from 'react';
import {
  Route, RouteComponentProps, Switch,
} from 'react-router-dom';

const AdminHomeView = React.lazy(() => import('views/admin/views/home'));
const PostJobView = React.lazy(() => import('views/admin/views/postJob'));
const PostCompanyView = React.lazy(() => import('views/admin/views/postCompany'));
const PostRecruiterView = React.lazy(() => import('views/admin/views/postRecruiter'));
const PostRecruiterManagerView = React.lazy(() => import('views/admin/views/postRecruiterManager'));
const ViewError = React.lazy(() => import('views/admin/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => (
  <AdminLayout>
    <Switch>
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
        path={[`${match.url}/${PostJobPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostJobView {...props} />
          </Suspense>
        )}
      />
      <AdminProtectedRoute
        path={[`${match.url}/${PostCompanyPath}`]}
        roles={['admin']}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostCompanyView {...props} />
          </Suspense>
        )}
      />
      <AdminProtectedRoute
        path={[`${match.url}/${PostRecruiterManagerPath}`]}
        roles={['admin']}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostRecruiterManagerView {...props} />
          </Suspense>
        )}
      />
      {/* <Route
        path={[`${match.url}/${PostCompanyPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostCompanyView {...props} />
          </Suspense>
        )}
      /> */}
      {/* <Route
        path={[`${match.url}/${PostRecruiterManagerPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostRecruiterManagerView {...props} />
          </Suspense>
        )}
      /> */}
      <AdminProtectedRoute
        path={[`${match.url}/${PostRecruiterPath}`]}
        roles={['manager']}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostRecruiterView {...props} />
          </Suspense>
        )}
      />
      {/* <Route
        path={[`${match.url}/${PostRecruiterPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <PostRecruiterView {...props} />
          </Suspense>
        )}
      /> */}
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
