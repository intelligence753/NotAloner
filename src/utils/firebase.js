import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDohLWkytRZXcfUm9vfoOdQXB5T-dp6k8k",
    authDomain: "notaloner-94408.firebaseapp.com",
    projectId: "notaloner-94408",
    storageBucket: "notaloner-94408.appspot.com",
    messagingSenderId: "44993397298",
    appId: "1:44993397298:web:706cd9931c2e4fc9ce722b"
  };

firebase.initializeApp(firebaseConfig);
console.log('初始')
export default firebase;