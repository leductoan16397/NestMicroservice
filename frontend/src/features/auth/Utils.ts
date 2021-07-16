import firebase from 'firebaseConfig/firebase';
import { UserState } from './authSlice';

export const getUserFromLocalStorage = (): UserState | null => {
  let user: any | string | null = localStorage.getItem('nest_react_user');
  if (user !== null) {
    user = JSON.parse(user);
    user = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      refreshToken: user.refreshToken,
      uid: user.uid,
      creationTime: user.creationTime,
      lastSignInTime: user.lastSignInTime,
      accessToken: user.accessToken,
      idToken: user.idToken,
      id: user.id,
    };
    return user;
  }
  return null;
};

export const setUserToLocalStorage = (user: UserState | null): void => {
  if (user) {
    localStorage.setItem(
      'nest_react_user',
      JSON.stringify(user),
    );
  } else {
    localStorage.removeItem('nest_react_user');
  }
};

export const transformUser = (UserCredential: firebase.auth.UserCredential): UserState => {
  const { user, additionalUserInfo } = UserCredential;

  return {
    displayName: user?.displayName || null,
    email: user?.email || null,
    photoURL: user?.photoURL || null,
    refreshToken: user?.refreshToken || null,
    uid: user?.uid || null,
    creationTime: user?.metadata.creationTime || null,
    lastSignInTime: user?.metadata.lastSignInTime || null,
    profile: additionalUserInfo?.profile,
  };
};
