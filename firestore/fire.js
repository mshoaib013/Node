const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'nsuslideshare',
  keyFilename: 'nsuslideshare-firebase-adminsdk-4j9aq-310422d6ef.json',
});
// const firestore = new Firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

const collection = firestore.collection('User')
const document = collection.doc("33");

// Enter new data into the document.
// document.set({
//   name: 'Welcome to Firestore',
//   mail: 'Welcome to Firestore',
//   a: 'Welcome to Firestore',
//   b: 'Welcome to Firestore',
//   r: 'Welcome to Firestore',
//   t: 'Welcome to Firestore',
//   t: 'Welcome to Firestore',
// }).then(() => {
//   console.log('push succeed');
// });

// // Update an existing document.
// document.update({
//   body: 'My first Firestore app',
// }).then(() => {
//   // Document updated successfully.
// });

// // Read the document.
// var a = document.get().then(doc => {
//   if (!doc.exists) {
//     console.log('No such document!');
//   } else {
//     console.log('Document data:', doc.data('name'));
//     console.log('1');
//   }
// });
var brazilCities = collection.where('name', '==', 'test');
console.log(brazilCities);
// document.getCollections().then(collections => {
//   collections.forEach(collection => {
//     console.log('Found subcollection with id:', collection.id);
//   });
// });
// console.log(a);

// // Delete the document.
// document.delete().then(() => {
//   // Document deleted successfully.
// });