import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


export const authConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCNmBxpGGjhkEKYv-g7avtedD_5S6sDeUY',
  authDomain: 'desafio-raiadrogasil.firebaseapp.com',
  projectId: 'desafio-raiadrogasil',
  storageBucket: 'desafio-raiadrogasil.appspot.com',
  messagingSenderId: '395892596149',
  appId: '1:395892596149:web:773401716965611e940dfc',
});


