import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDcxMHCQlNzJXxPiotJ2IInqHX-vfgacEk",
    authDomain: "linkedinclone-nm.firebaseapp.com",
    projectId: "linkedinclone-nm",
    storageBucket: "linkedinclone-nm.appspot.com",
    messagingSenderId: "930217283782",
    appId: "1:930217283782:web:516a6a88592aa26fcc07c7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };