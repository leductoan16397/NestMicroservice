import { useAppSelector, useAppDispatch } from 'app/hooks';
import SpinComponent from 'components/spin/spin';
import { HomePath, UserPath } from 'constants/path';
import { Locale, selectLocale } from 'features/locale/localeSlice';
import Message from 'lang';
import React, { Suspense, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import flatten from 'flat';
import firebase from 'firebaseConfig/firebase';
import { setUser } from 'features/user/userSlice';

const ViewError = React.lazy(() => import('views/error404'));
const ViewUser = React.lazy(() => import('views/user'));
const ViewApp = React.lazy(() => import('views/app'));

const App: React.FC = () => {
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
