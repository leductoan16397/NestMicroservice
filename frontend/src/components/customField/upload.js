/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import firebase, { firebaseStorage } from 'firebaseConfig/firebase';

export const onUpload = async (options) => {
  const {
    onSuccess, onError, file, onProgress,
  } = options;

  const storageRef = firebaseStorage.ref();
  const uploadTask = storageRef.child(file.name).put(file);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress({ percent });
    },
    (error) => {
      onError(error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        onSuccess(downloadURL);
      });
    });
};
