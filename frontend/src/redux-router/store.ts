import {
  configureStore, ThunkAction, Action, combineReducers,
} from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';

export const history = createBrowserHistory();

const createRootReducer = (histor: History): any => combineReducers({
  router: connectRouter(histor),
});

export const RouterStore = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: true,
  }).concat(routerMiddleware(history)),
});
export type RouterDispatch = typeof RouterStore.dispatch;
export type RootState = ReturnType<typeof RouterStore.getState>;
export type RouterThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
