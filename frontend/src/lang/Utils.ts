/* eslint-disable arrow-body-style */
export const getLocaleFromLocalStorage = (): string | null => {
  return localStorage.getItem('nest_demo_locale');
};

export const setLocaleToLocalStorage = (locale: string): void => {
  localStorage.setItem('nest_demo_locale', locale);
};
