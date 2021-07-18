import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import userSlice from 'features/user/userSlice';
import localeSlice from 'features/locale/localeSlice';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const AdminStore = configureStore({
  reducer: {
    counter: counterReducer,
    locale: localeSlice,
    // user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: true,
  }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type AdminDispatch = typeof AdminStore.dispatch;
export type RootState = ReturnType<typeof AdminStore.getState>;
export type AdminThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
