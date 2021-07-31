import { AdminUser } from './userSlice';

export const getUserFromLocalStorage = (): AdminUser | null => {
  const userString: string | null = localStorage.getItem('nest_demo_admin_user');
  if (userString) {
    const user: AdminUser = JSON.parse(userString);
    return user;
  }
  return null;
};

export const setLocaleToLocalStorage = (user: AdminUser | null): void => {
  if (user) {
    localStorage.setItem('nest_demo_admin_user', JSON.stringify(user));
  }
  localStorage.removeItem('nest_demo_admin_user');
};
