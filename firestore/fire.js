const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'nsuslideshare',
  keyFilename: 'nsuslideshare-firebase-adminsdk-4j9aq-310422d6ef.json',
});
// const firestore = new Firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


const document = firestore.doc('/User/33');

// Enter new data into the document.
document.set({
  name: 'Welcome to Firestore',
  mail: 'Welcome to Firestore',
  a: 'Welcome to Firestore',
  b: 'Welcome to Firestore',
  r: 'Welcome to Firestore',
  t: 'Welcome to Firestore',
  t: 'Welcome to Firestore',
}).then(() => {
  // Document created successfully.
});

// // Update an existing document.
// document.update({
//   body: 'My first Firestore app',
// }).then(() => {
//   // Document updated successfully.
// });

// // Read the document.
// var a = document.get(name).then(doc => {
//   // Document read successfully.
// });
// console.log(a);

// // Delete the document.
// document.delete().then(() => {
//   // Document deleted successfully.
// });