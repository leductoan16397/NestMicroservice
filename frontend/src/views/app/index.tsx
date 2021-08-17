import SpinComponent from 'components/spin/spin';
import {
  AllJobPath,
  HomePath,
  JobCityPath,
  JobCompanyPath,
  JobDetailPath,
  JobSkillPath,
  JobTitlePath,
  PostReviewPath,
  UserPath,
} from 'constants/path';
import React, { ReactElement, Suspense, useEffect } from 'react';
import firebase from 'firebaseConfig/firebase';
import { setUser } from 'features/user/userSlice';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import AppLayout from 'layout/appLayout/appLayout';
import { IntlProvider } from 'react-intl';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Locale, selectLocale } from 'features/locale/localeSlice';
import Message from 'lang';
import flatten from 'flat';

const PostReviewView = React.lazy(() => import('./review'));
const HomeView = React.lazy(() => import('./home'));
const AllJobView = React.lazy(() => import('./allJob'));
const JobDetailView = React.lazy(() => import('./jobDetail'));
const JobCityIndexView = React.lazy(() => import('./jobCity'));
const JobCompanyIndexView = React.lazy(() => import('./jobCompany'));
const JobSkillIndexView = React.lazy(() => import('./jobSkill'));
const JobTitleIndexView = React.lazy(() => import('./jobTitle'));
const CompanyDetailView = React.lazy(() => import('./cpmpanyDetail'));
const ViewError = React.lazy(() => import('views/app/error404'));
const ViewUser = React.lazy(() => import('views/app/user'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => {
  const locale: string = useAppSelector(selectLocale);
  const messages = Message[locale];
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth()
      .onAuthStateChanged((user: firebase.User | null) => {
        dispatch(setUser(user));
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <IntlProvider
      locale={locale}
      messages={flatten(messages)}
      defaultLocale={Locale.EN}
    >
      <AppLayout>
        <Switch>
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
            // exact
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
            path={[`/${PostReviewPath}`, `${match.url}/${PostReviewPath}`]}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <PostReviewView {...props} />
              </Suspense>
            )}
          />
          <Route
            // exact
            path={[`/${JobSkillPath}`, `${match.url}/${JobSkillPath}`]}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <JobSkillIndexView {...props} />
              </Suspense>
            )}
          />
          <Route
            // exact
            path={[`/${JobTitlePath}`, `${match.url}/${JobTitlePath}`]}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <JobTitleIndexView {...props} />
              </Suspense>
            )}
          />
          <Route
            path={`/${UserPath}`}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <ViewUser {...props} />
              </Suspense>
            )}
          />
          <Route
            // exact
            // strict
            path={[`${HomePath}`, `${match.url}/${HomePath}`]}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <HomeView {...props} />
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
    </IntlProvider>
  );
};
export default App;
