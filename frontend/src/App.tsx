import { Home, User } from 'constants/path';
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
      <Suspense fallback={<SpinComponent />}>
        <BrowserRouter>
          <Switch>
            {/* <ProtectedRoute
                path={adminRoot}
                component={ViewApp}
                roles={[UserRole.admin, UserRole.user]}
              /> */}
            <Route
              path={`/${Home}`}
              component={ViewApp}
            />
            <Route
              path={`/${User}`}
              component={ViewUser}
            />
            <Route
              component={ViewError}
            />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
    {/* </IntlProvider> */}
  </div>
);

export default App;
