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

const createUser = async () => {
  await createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
    })
    .catch((error) => console.log(error));
};

const sigin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      userData.uid = userCredential.user.uid;

      console.log("Success!! Signed In", userData);
    })
    .catch((error) => console.log(error));
};

const userData = {};

module.exports = { auth, unsubscribe, createUser, sigin, userData };
