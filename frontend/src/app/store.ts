import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'features/user/userSlice';
import localeReducer from 'features/locale/localeSlice';
import searchReducer from 'features/search/searchSlice';
import createSagaMiddleware from 'redux-saga';
import counterReducer from 'features/counter/counterSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const AppStore = configureStore({
  reducer: {
    counter: counterReducer,
    locale: localeReducer,
    user: userReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: true,
  }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof AppStore.dispatch;
export type RootState = ReturnType<typeof AppStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
