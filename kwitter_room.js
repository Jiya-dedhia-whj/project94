var firebaseConfig = {
  apiKey: "AIzaSyAbzlbpi0i2X_gyQ8MyiR77g9GaguRe-fc",
  authDomain: "bbmp-901f1.firebaseapp.com",
  databaseURL: "https://bbmp-901f1-default-rtdb.firebaseio.com",
  projectId: "bbmp-901f1",
  storageBucket: "bbmp-901f1.appspot.com",
  messagingSenderId: "31887810202",
  appId: "1:31887810202:web:5146dd6bf57252120ec923",
  measurementId: "G-JJ80JSGS89"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";