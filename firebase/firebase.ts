// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsspfjcyip5PAOC-nuG2eZ_QybWt6khns",
  authDomain: "ventory-cdd86.firebaseapp.com",
  projectId: "ventory-cdd86",
  storageBucket: "ventory-cdd86.firebasestorage.app",
  messagingSenderId: "742630000257",
  appId: "1:742630000257:web:3d4c22bc469c788d11af80",
  measurementId: "G-0PFE24RJCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (await isSupported()) {
    const analytics = getAnalytics(app);   
}

const auth = getAuth(app)

export { app, auth }