/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import queryString from 'query-string';
import firebase, { firebaseAuth } from 'firebaseConfig/firebase';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

const getFirebaseToken = async (): Promise<string | null | undefined> => {
  const { currentUser } = firebaseAuth;
  if (currentUser) {
    return currentUser.getIdToken();
  }

  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => reject(null), 5000);
    const unregisterAuthObserver = firebase.auth()
      .onAuthStateChanged(async (user: firebase.User | null) => {
        if (!user) {
          reject(null);
        }
        const token: string | undefined = await user?.getIdToken();
        resolve(token);
        unregisterAuthObserver();
        clearTimeout(waitTimer);
      });
  });
};

axiosClient.interceptors.request.use(async (config) => {
  const newConfig = { ...config };
  const token = await getFirebaseToken();
  if (token) newConfig.headers.Authorization = `Bearer ${token}`;
  return newConfig;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;
