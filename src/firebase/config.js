import  firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_BVKRnYraoBI_M6GgR5L5mPKcGcS8ZSk",
    authDomain: "egypt-tours.firebaseapp.com",
    projectId: "egypt-tours",
    storageBucket: "egypt-tours.appspot.com",
    messagingSenderId: "860466565344",
    appId: "1:860466565344:web:7af9baeb3c36739c9a8085"
  };
  firebase.initializeApp(firebaseConfig)
  const projectFireStore=firebase.firestore()

  export {projectFireStore}