  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4ZJ8UDthpwCgRr8RhcnbrNxD4WNYBbJs",
    authDomain: "saveyouapp-604d3.firebaseapp.com",
    projectId: "saveyouapp-604d3",
    storageBucket: "saveyouapp-604d3.appspot.com",
    messagingSenderId: "832368381997",
    appId: "1:832368381997:web:bad80347aecb68b172e8a4",
    measurementId: "G-VLMM100HDS"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);