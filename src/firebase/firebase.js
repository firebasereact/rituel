import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAHTJdO-BUBaoHnFvVVufom3GRkfqRLilY",
    authDomain: "rituel-7421d.firebaseapp.com",
    databaseURL: "https://rituel-7421d.firebaseio.com",
    projectId: "rituel-7421d",
    storageBucket: "rituel-7421d.appspot.com",
    messagingSenderId: "630283208617",
  };
  
  const devConfig = {
    apiKey: "AIzaSyAHTJdO-BUBaoHnFvVVufom3GRkfqRLilY",
    authDomain: "rituel-7421d.firebaseapp.com",
    databaseURL: "https://rituel-7421d.firebaseio.com",
    projectId: "rituel-7421d",
    storageBucket: "rituel-7421d.appspot.com",
    messagingSenderId: "630283208617",
  };
  
  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, };