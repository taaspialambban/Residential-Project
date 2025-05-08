// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfhL9JswRrOZe1xJeCnw5jCDCjUIOysz4",
  authDomain: "residential-project-6d243.firebaseapp.com",
  projectId: "residential-project-6d243",
  storageBucket: "residential-project-6d243.firebasestorage.app",
  messagingSenderId: "773777891121",
  appId: "1:773777891121:web:8eb5be63dc18ffd4041a10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;