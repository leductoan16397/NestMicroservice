/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HomePath, UserPath } from 'constants/path';
import React, { Suspense } from 'react';
// import { IntlProvider } from 'react-intl';
import {
  BrowserRouter,
  Route,
  Switch,
  // RouteComponentProps,
} from 'react-router-dom';
import SpinComponent from './components/spin/spin';

const ViewError = React.lazy(() => import('views/error404'));
const ViewUser = React.lazy(() => import('views/user'));
const ViewApp = React.lazy(() => import('views/app'));

const App: React.FC = () => (
  <div className="App App-header">
    {/* <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      > */}
    <>
      <BrowserRouter>
        <Switch>
          {/* <ProtectedRoute
                path={adminRoot}
                component={ViewApp}
                roles={[UserRole.admin, UserRole.user]}
              /> */}
          <Route
            path={`/${HomePath}`}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <ViewApp {...props} />
              </Suspense>
            )}
          />
          {/* <Route
            path={`/${UserPath}`}
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <ViewUser {...props} />
              </Suspense>
            )}
          /> */}
          <Route
            render={(props) => (
              <Suspense fallback={<SpinComponent />}>
                <ViewError {...props} />
              </Suspense>
            )}
          // component={ViewError}
          />
        </Switch>
      </BrowserRouter>
    </>
    {/* </IntlProvider> */}
  </div>
);

export default App;
