import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from 'admin/features/user/userSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const AdminStore = configureStore({
  reducer: {
    user: userSlice,
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
