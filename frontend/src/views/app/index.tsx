import SpinComponent from 'components/spin/spin';
import { Home } from 'constants/path';
import React, { ReactElement, Suspense } from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';

const HomeView = React.lazy(() => import('./home'));
const ViewError = React.lazy(() => import('views/error404'));

const App: React.FC<RouteComponentProps> = ({ match }): ReactElement => (
  <Suspense fallback={<SpinComponent />}>
    <Switch>
      <Route
        path={`${match.url}/${Home}`}
        component={HomeView}
      />
      <Route component={ViewError} />
    </Switch>
  </Suspense>
);
export default App;
