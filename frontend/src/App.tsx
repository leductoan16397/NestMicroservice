import SpinComponent from 'components/spin/spin';
import { AdminPath, HomePath } from 'constants/path';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AdminStore } from 'admin/store';
import { AppStore } from 'app/store';
import { history, RouterStore } from 'redux-router/store';
import { ConnectedRouter } from 'connected-react-router';

const ViewError = React.lazy(() => import('views/app/error404'));
const AdminVew = React.lazy(() => import('views/admin'));
const ViewApp = React.lazy(() => import('views/app'));

const App: React.FC = () => (
  <Provider store={RouterStore}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route
            path={`/${AdminPath}`}
            render={(props) => (
              <Provider store={AdminStore}>
                <Suspense fallback={<SpinComponent />}>
                  <AdminVew {...props} />
                </Suspense>
              </Provider>
            )}
          />
          <Route
            path={`/${HomePath}`}
            render={(props) => (
              <Provider store={AppStore}>
                <Suspense fallback={<SpinComponent />}>
                  <ViewApp {...props} />
                </Suspense>
              </Provider>
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
    </ConnectedRouter>
  </Provider>
);

export default App;
