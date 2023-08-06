// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZwH7wZddMZFTIAL-M6XHbhClUzrxXNKY",
  authDomain: "appolo-hospital.firebaseapp.com",
  projectId: "appolo-hospital",
  storageBucket: "appolo-hospital.appspot.com",
  messagingSenderId: "351147123175",
  appId: "1:351147123175:web:545d8749cd2e622a81dd42",
  measurementId: "G-KFYR1XX19Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {
  app,analytics
}