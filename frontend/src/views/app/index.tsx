import SpinComponent from 'components/spin/spin';
import {
  AllJobPath,
  JobCityPath, JobCompanyPath, JobSkillPath, JobTitlePath,
} from 'constants/path';
import React, { ReactElement, Suspense } from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import AppLayout from 'layout/appLayout';

const HomeView = React.lazy(() => import('./home'));
const AllJobView = React.lazy(() => import('./allJob'));
const JobCityIndexView = React.lazy(() => import('./jobCity'));
const JobCompanyIndexView = React.lazy(() => import('./jobCompany'));
const JobSkillIndexView = React.lazy(() => import('./jobSkill'));
const JobTitleIndexView = React.lazy(() => import('./jobTitle'));
const ViewError = React.lazy(() => import('views/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => (
  <AppLayout>
    <Switch>
      <Route
        path={`${match.url}/`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <HomeView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={`/${AllJobPath}`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <AllJobView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={`/${JobCityPath}`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobCityIndexView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={`/${JobCompanyPath}`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobCompanyIndexView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={`/${JobSkillPath}`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobSkillIndexView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={`/${JobTitlePath}`}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobTitleIndexView {...props} />
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
  </AppLayout>
);
export default App;
