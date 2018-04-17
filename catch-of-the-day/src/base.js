import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB7ZxbzOB_eyW91Hgh1pVkHuDtNkTru5aM',
  authDomain: 'catch-of-the-day-ian-1.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ian-1.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
