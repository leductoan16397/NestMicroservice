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
  reducers: {
    switchLocale: (state, action: PayloadAction<Locale>) => {
      state.value = action.payload;
      setLocaleToLocalStorage(action.payload);
    },
  },
});

export const { switchLocale } = localeSlice.actions;

export const selectLocale = (state: RootState): any => state.locale.value;

export default localeSlice.reducer;
