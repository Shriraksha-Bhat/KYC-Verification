import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBL1DGSZtAI0a8jGYRmKFW5HeKeBHKdO3I",
    authDomain: "kyc-verify.firebaseapp.com",
    projectId: "kyc-verify",
    storageBucket: "kyc-verify.appspot.com",
    messagingSenderId: "9086790814",
    appId: "1:9086790814:web:1023aff80d76ad2d60df8f",
    measurementId: "G-M4TNWN9YB8"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;