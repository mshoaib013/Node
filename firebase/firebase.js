const admin = require('firebase');
var config = {
  apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
  authDomain: "nsuslideshare.firebaseapp.com",
  databaseURL: "https://nsuslideshare.firebaseio.com",
  projectId: "nsuslideshare",
  storageBucket: "nsuslideshare.appspot.com",
  messagingSenderId: "603965086262"
};
admin.initializeApp(config);
var db = admin.database();
var myRef = db.ref("DEPT").child("ECE").child("Slides").child("CSE225");
// myRef.on("value", function(snapshot) {
//   // arr.push(snap.val);
//   console.log(snapshot.key);
//   console.log(snapshot.val());
//   // console.log(snap.key);
//   // console.log(snap.child('Lecture 1').val());
//   // console.log(snap.numChildren());
// });
myRef.on("child_added", function(snapshot, prevChildKey) {
  var key = snapshot.key;
  console.log(key);
  var val = snapshot.val();
  console.log(val);
});
