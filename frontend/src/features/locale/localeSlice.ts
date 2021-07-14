/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocaleFromLocalStorage, setLocaleToLocalStorage } from 'lang/Utils';
import { RootState } from '../../app/store';

export enum Locale {
  EN = 'en',
  VI = 'vi'
}
export interface LocaleState {
  value: Locale;
}

const initialState: LocaleState = {
  value: getLocaleFromLocalStorage() as Locale || Locale.EN,
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    switchLocale: (state, action: PayloadAction<Locale>) => {
      state.value = action.payload;
      setLocaleToLocalStorage(action.payload);
    },
  },
});

export const { switchLocale } = localeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLocale = (state: RootState): any => state.locale.value;

export default localeSlice.reducer;
