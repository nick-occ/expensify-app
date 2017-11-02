import * as firebase from 'firebase';
import moment from 'moment';

// configuration to firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.envFIREBASE_MESSAGING_SENDER_ID
};

// initialize app
firebase.initializeApp(config);

// connect to database
const database = firebase.database();

export { firebase, database as default };

// // remove child event listener
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// // change child event listener
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// // add child event listener
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// view expense data
// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((expense)=>{
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         });
//     });
//     console.log(expenses);
// });

// // view expeneses when ever data is changed or added
// database.ref('expenses')
// .on('value',((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((expense)=>{
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         });
//     });
//     console.log(expenses);
//     }
// ))

// // create expense data
// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// });

// example to create and store an event listener
// const onValueChange = database.ref().on("value", (snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// },(e)=>{
//     console.log('Error with data fetching', e);
// });

// example to update data after a specified amount of seconds
// setTimeout(()=>{
//     database.ref().update({
//         'job/title':'Manager'
//     })
// },3000);

// setTimeout(()=>{
//     database.ref('age').set(29)
// }, 3500);

// setTimeout(()=>{
//     database.ref().off('value',onValueChange);
// }, 7000);

// setTimeout(()=>{
//     database.ref('age').set(30)
// }, 10500);

// create data
// database.ref().set({
//     name: 'Nicholas Occhipinti',
//     age: 37,
//     stressLevel: 6,
//     job: {
//         title:'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Charlotte',
//         country: 'United States'
//     }
// }).then(()=>{
//     console.log('data is saved');
// }).catch((err)=>{
//     console.log('this failed',err);
// });

// update data
// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city': 'Seattle'
// });

// remove data
// database.ref('isSingle').remove();

