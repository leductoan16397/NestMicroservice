import SpinComponent from 'components/spin/spin';
import {
  AllJobPath,
  HomePath,
  JobCityPath,
  JobCompanyPath,
  JobDetailPath,
  JobSkillPath,
  JobTitlePath,
} from 'constants/path';
import React, { ReactElement, Suspense } from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import AppLayout from 'layout/appLayout';

const HomeView = React.lazy(() => import('./home'));
const AllJobView = React.lazy(() => import('./allJob'));
const JobDetailView = React.lazy(() => import('./jobDetail'));
const JobCityIndexView = React.lazy(() => import('./jobCity'));
const JobCompanyIndexView = React.lazy(() => import('./jobCompany'));
const JobSkillIndexView = React.lazy(() => import('./jobSkill'));
const JobTitleIndexView = React.lazy(() => import('./jobTitle'));
const CompanyDetailView = React.lazy(() => import('./cpmpanyDetail'));
const ViewError = React.lazy(() => import('views/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => (
  <AppLayout>
    <Switch>
      <Route
        exact
        path={[`${match.url}/`, `${match.url}/${HomePath}/`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <HomeView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`/${AllJobPath}`, `${match.url}/${AllJobPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <AllJobView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`/${JobDetailPath}`, `${match.url}/${JobDetailPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobDetailView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`/${JobCityPath}`, `${match.url}/${JobCityPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobCityIndexView {...props} />
          </Suspense>
        )}
      />
      <Route
        exact
        path={[`/${JobCompanyPath}`, `${match.url}/${JobCompanyPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobCompanyIndexView {...props} />
          </Suspense>
        )}
      />
      <Route
        path={[`/${JobCompanyPath}/detail`, `${match.url}/${JobCompanyPath}/detail`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <CompanyDetailView {...props} />
          </Suspense>
        )}
      />
      <Route
        exact
        path={[`/${JobSkillPath}`, `${match.url}/${JobSkillPath}`]}
        render={(props) => (
          <Suspense fallback={<SpinComponent />}>
            <JobSkillIndexView {...props} />
          </Suspense>
        )}
      />
      <Route
        exact
        path={[`/${JobTitlePath}`, `${match.url}/${JobTitlePath}`]}
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
