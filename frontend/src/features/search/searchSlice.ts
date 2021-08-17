/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

type City = 'Hồ Chí Minh' | 'Hà Nội' | 'Đà Nẵng' | 'All Cities';
// const city = {
//   'ha-noi': 'Hà Nội',
//   'ho-chi-minh-hcm': 'Hồ Chí Minh',
//   'da-nang': 'Đà Nẵng',
// };

interface SearchState {
  jobTitle: string | null | undefined;
  city: City | string;
}

const getJobTitleFromUrl = (): string => {
  let path = window.location.pathname.split('/')[1];
  if (getCity(path)) {
    path = window.location.pathname.split('/')[2];
  }
  path = path.replace('-', ' ');
  return path;
};

const getCityFromUrl = (): string => {
  let path = window.location.pathname.split('/')[1];
  let city = getCity(path);
  if (city === null) {
    path = window.location.pathname.split('/')[2];
    city = getCity(path);
  }
  return city || 'all';
};

const getCity = (path: string): City | string | null => {
  if (path === 'ha-noi') {
    return 'HN';
  }
  if (path === 'ho-chi-minh-hcm') {
    return 'HCM';
  }
  if (path === 'da-nang') {
    return 'DN';
  }
  return null;
};

export const getCityV2 = (value: string): string => {
  if (value === 'HN') {
    return 'Hà Nội';
  }
  if (value === 'HCM') {
    return 'Hồ Chí Minh';
  }
  if (value === 'DN') {
    return 'Đà Nẵng';
  }
  return 'All Cities';
};

const initialState: SearchState = {
  jobTitle: getJobTitleFromUrl() || '',
  city: getCityFromUrl(),
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addTitle: (state, action: PayloadAction<string[]>) => {
      state.jobTitle = action.payload.length > 1 ? action.payload.join(' ') : action.payload[0];
    },
    clearTitle: (state) => {
      state.jobTitle = undefined;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { addTitle, clearTitle, changeCity } = searchSlice.actions;

export const selectJobTitle = (state: RootState): any => state.search.jobTitle;
export const selectCity = (state: RootState): City | string => state.search.city;
export default searchSlice.reducer;
