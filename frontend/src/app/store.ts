import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from 'features/user/userSlice';
import localeSlice from 'features/locale/localeSlice';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    locale: localeSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: true,
  }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
