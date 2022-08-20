import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
   apiKey: "AIzaSyA7nk6PSTraMNMuO6cK5OWYho9QXQr4yd0",
   authDomain: "you-tube-clone-366ff.firebaseapp.com",
   projectId: "you-tube-clone-366ff",
   storageBucket: "you-tube-clone-366ff.appspot.com",
   messagingSenderId: "475186662798",
   appId: "1:475186662798:web:8fa0cc64a0543f347b68df"
 };

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
