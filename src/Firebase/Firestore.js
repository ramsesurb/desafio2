import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS5SMx2kVTDFE7OZBBFgp3xlSCnrS-0wU",
  authDomain: "ramstore-a0cef.firebaseapp.com",
  projectId: "ramstore-a0cef",
  storageBucket: "ramstore-a0cef.appspot.com",
  messagingSenderId: "693539373014",
  appId: "1:693539373014:web:c4b96740ed87ac24f8ee77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)