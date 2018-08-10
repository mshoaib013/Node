const admin = require('firebase');
var array = [];
var i = 0;
// import firebase from "firebase";
var config = {
  apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
  authDomain: "nsuslideshare.firebaseapp.com",
  databaseURL: "https://nsuslideshare.firebaseio.com",
  projectId: "nsuslideshare",
  storageBucket: "nsuslideshare.appspot.com",
  messagingSenderId: "603965086262"
};
admin.initializeApp(config);
// console.log(firebase.database);
// Import Admin SDK
var db = admin.database();
// var a='';
// var databasee = db.getReference();
var myRef = db.ref("DEPT").child("ECE").child("Slides").child("CSE225");
myRef.on("value", function(snap) {
  // a = snap.val();
  array[i] = (snap.val());
  // console.log(snap.val());
  // console.log(snap.numChildren());
});
console.log(array.length);
// console.log(a);
// console.log(myRef.key);
// console.log(myRef.val); 
// console.log(myRef);
// Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });