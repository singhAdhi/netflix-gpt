// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOqQvkwrlqH_e9NGQAIWkjmoO28zqe4ww",
  authDomain: "netflixgpt-13946.firebaseapp.com",
  projectId: "netflixgpt-13946",
  storageBucket: "netflixgpt-13946.appspot.com",
  messagingSenderId: "638628025321",
  appId: "1:638628025321:web:77d219c700f3d7676b3178",
  measurementId: "G-YGZCGJJQ4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
