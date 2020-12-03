importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyBFst3hheXf6nbpreib3dUDnNb1vDPf1TY",
  authDomain: "webgl-rnd.firebaseapp.com",
  projectId: "webgl-rnd",
  storageBucket: "webgl-rnd.appspot.com",
  messagingSenderId: "393737284899",
  appId: "1:393737284899:web:5b083312eff0d14a93f096",
  measurementId: "G-P0ZRK0S1D0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(function () {
    console.log("Got permission.")
    unityInstance.SendMessage(parsedObjectName, parsedCallback, "Got Permission");
  })
  .catch(function (err) {
    unityInstance.SendMessage(parsedObjectName, parsedFallback, err);
    console.error("Error getting permission.")
  })

messaging.onMessage(function(payload) {
    console.log("Message received.", payload);
  });
