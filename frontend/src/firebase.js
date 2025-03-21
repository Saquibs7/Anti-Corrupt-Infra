// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // ✅ Replace with your Firebase Config
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: your_google_api_key_here,
  authDomain: "anti-corruption-infrastructure.firebaseapp.com",
  projectId: "anti-corruption-infrastructure",
  storageBucket: "anti-corruption-infrastructure.firebasestorage.app",
  messagingSenderId: "921694611135",
  appId: "1:921694611135:web:522b05d5756f9ed69c880a",
  measurementId: "G-BFVV071SCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
