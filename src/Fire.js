import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHzrH2zlunPeRB5kh4qaGjOSn-WfYYI2k",
  authDomain: "first-chat-app-1ecee.firebaseapp.com",
  projectId: "first-chat-app-1ecee",
  storageBucket: "first-chat-app-1ecee.appspot.com",
  messagingSenderId: "1089687970595",
  appId: "1:1089687970595:web:8705d1a4396bd598ed2296",
  measurementId: "G-3975K9PBZ0",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
