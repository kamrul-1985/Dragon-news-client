// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfTpDWpqDqJ4Uzb1lLjgOkZ-W_TeQpV8Y",
  authDomain: "news-dragon-app.firebaseapp.com",
  projectId: "news-dragon-app",
  storageBucket: "news-dragon-app.appspot.com",
  messagingSenderId: "669620845737",
  appId: "1:669620845737:web:7f1b092fb3f2f18d48fdb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;