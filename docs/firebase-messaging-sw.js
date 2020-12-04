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

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  var jsonData = JSON.stringify(payload);
  console.log('JSON DATA: ', jsonData);
  var parsedPayload = JSON.parse(jsonData);
  console.log('Title', parsedPayload.notification.title);
  console.log('Body', parsedPayload.notification.body);

  const notificationTitle = parsedPayload.notification.title;
  const notificationOptions = {
    body: parsedPayload.notification.body,
    icon: parsedPayload.notification.image
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
