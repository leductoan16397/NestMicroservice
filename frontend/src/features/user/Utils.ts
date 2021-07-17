import firebase from 'firebaseConfig/firebase';
import { User } from './userSlice';

export const transformUser = (user: firebase.User): User => ({
  displayName: user?.displayName || null,
  email: user?.email || null,
  photoURL: user?.photoURL || null,
  refreshToken: user?.refreshToken || null,
  uid: user?.uid || null,
  creationTime: user?.metadata.creationTime || null,
  lastSignInTime: user?.metadata.lastSignInTime || null,
});
