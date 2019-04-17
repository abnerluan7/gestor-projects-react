import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVfTthb0oyNZc4xMlRz7x1SyKLZ83MsvU",
    authDomain: "projcts-4b121.firebaseapp.com",
    databaseURL: "https://projcts-4b121.firebaseio.com",
    projectId: "projcts-4b121",
    storageBucket: "projcts-4b121.appspot.com",
    messagingSenderId: "758400579079"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;