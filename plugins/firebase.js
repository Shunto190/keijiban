import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBXC_PH-jocnw9RTN0NjwYCI3Vh8xxej4Q",
    authDomain: "keijiban-a6b5f.firebaseapp.com",
    databaseURL: "https://keijiban-a6b5f.firebaseio.com",
    projectId: "keijiban-a6b5f",
    storageBucket: "keijiban-a6b5f.appspot.com",
    messagingSenderId: "668966010833"
  })
}

export default firebase