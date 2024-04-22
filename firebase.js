const { initializeApp } = require("firebase/app");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { getStorage } = require("firebase/storage");
const { getFirestore } = require("firebase/firestore");
const { getMessaging } = require("firebase/messaging");

const firebaseConfig = {
  apiKey: "AIzaSyA7CeePxMozCVznkF9DgU8BCIDvyxpntfI",
  authDomain: "vihiga-intranet.firebaseapp.com",
  projectId: "vihiga-intranet",
  storageBucket: "vihiga-intranet.appspot.com",
  messagingSenderId: "686048599992",
  appId: "1:686048599992:web:a135ae187a3815b3a5f94d",
  measurementId: "G-H9ZG4GS912",
};

// Initialize Firebase app

const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);
// const firestore = getFirestore(firebaseApp);
// const messaging = getMessaging(firebaseApp);

// Export Firebase services

const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  const uid = currentUser?.uid;
  if (uid) {
    // onSnapshot(doc(firestore, "users", uid), (doc) => {
    console.log(uid, "User Data");
    // });
  } else {
    console.log("Not Signed in");
  }
});

const createUser = () => {
  createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};

const sigin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Success!! Signed In");
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
    });
};

module.exports = { auth, unsubscribe, createUser, sigin };
