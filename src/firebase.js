import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAQ7BjcEdRwbks_ge3F1y8d8SVvGCssjP4",
  authDomain: "firechat-7f894.firebaseapp.com",
  projectId: "firechat-7f894",
  storageBucket: "firechat-7f894.appspot.com",
  messagingSenderId: "169615540158",
  appId: "1:169615540158:web:2b8a60821594d1181983ef"
}).auth()