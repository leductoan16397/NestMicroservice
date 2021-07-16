import { useAppSelector } from 'app/hooks';
import SpinComponent from 'components/spin/spin';
import { HomePath, UserPath } from 'constants/path';
import { Locale, selectLocale } from 'features/locale/localeSlice';
import Message from 'lang';
import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter,
  Route,
  Switch,
  // RouteComponentProps,
} from 'react-router-dom';
import flatten from 'flat';

const ViewError = React.lazy(() => import('views/error404'));
const ViewUser = React.lazy(() => import('views/user'));
const ViewApp = React.lazy(() => import('views/app'));

const App: React.FC = () => {
  const locale: string = useAppSelector(selectLocale);
  const messages = Message[locale];

  return (
    <div className="App App-header">
      <IntlProvider
        locale={locale}
        messages={flatten(messages)}
        defaultLocale={Locale.EN}
      >
        <>
          <BrowserRouter>
            <Switch>
              {/* <ProtectedRoute
                path={adminRoot}
                component={ViewApp}
                roles={[UserRole.admin, UserRole.user]}
              /> */}
              <Route
                path={`/${UserPath}`}
                render={(props) => (
                  <Suspense fallback={<SpinComponent />}>
                    <ViewUser {...props} />
                  </Suspense>
                )}
              />
              <Route
                path={`/${HomePath}`}
                render={(props) => (
                  <Suspense fallback={<SpinComponent />}>
                    <ViewApp {...props} />
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
          </BrowserRouter>
        </>
      </IntlProvider>
    </div>
  );
};

export default App;
