import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBn1tzK-8PXI46hUWh-NMzAhaIh2g3qPOk',
  authDomain: 'auth-84d7e.firebaseapp.com',
  databaseURL: 'https://auth-84d7e.firebaseio.com',
  projectId: 'auth-84d7e',
  storageBucket: 'auth-84d7e.appspot.com',
  messagingSenderId: '1060259921740'
};

const app = firebase.initializeApp(config);
export const db = app.database();
