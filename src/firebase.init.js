import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQOl8hbTKkl_joEYtPDv4vHsj_147aFk8",
    authDomain: "clason-warehouse.firebaseapp.com",
    projectId: "clason-warehouse",
    storageBucket: "clason-warehouse.appspot.com",
    messagingSenderId: "269215651676",
    appId: "1:269215651676:web:408d46909c47699c471399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;