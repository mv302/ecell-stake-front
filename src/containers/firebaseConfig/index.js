// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// function StartFirebase() {
//   const firebaseConfig = {
//     apiKey: "AIzaSyApm0UL76BHxiC36wzJZRCxQH0tsfMlOPU",

//     authDomain: "ecell-d5d2c.firebaseapp.com",

//     databaseURL:
//       "https://ecell-d5d2c-default-rtdb.asia-southeast1.firebasedatabase.app",

//     projectId: "ecell-d5d2c",

//     storageBucket: "ecell-d5d2c.appspot.com",

//     messagingSenderId: "443301337374",

//     appId: "1:443301337374:web:1c055dab09946ba6e9110f",

//     measurementId: "G-H31BLZLNGT",
//   };

//   const app = initializeApp(firebaseConfig);
//   return getDatabase(app);
// }

// export default StartFirebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase() {
const firebaseConfig = {
  apiKey: "AIzaSyAGyYWnJcNyI_cB1ywvjqz5EzDCmquZanw",
  authDomain: "ecell-stake.firebaseapp.com",
  databaseURL: "https://ecell-stake-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecell-stake",
  storageBucket: "ecell-stake.firebasestorage.app",
  messagingSenderId: "637694149122",
  appId: "1:637694149122:web:8f554bf4afe4638b105d1b",
  measurementId: "G-VTD72TQKL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app);
//const analytics = getAnalytics(app);
}

export default StartFirebase;
