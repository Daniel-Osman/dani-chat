import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyCmKeN3djyRxGhZPjTvMnrIqHoCNRnaJt8',
    authDomain: 'danichat-b9e2f.firebaseapp.com',
    projectId: 'danichat-b9e2f',
    storageBucket: 'danichat-b9e2f.appspot.com',
    messagingSenderId: '260480851786',
    appId: '1:260480851786:web:6a5b7ba0e6f06ace58abb3',
  })
  .auth();
