// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase/app";
import "firebase/firestore";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCy-onweyWbLhO1OkMHIEc35qlzlY4Dns8",
    authDomain: "cosmos-4d16d.firebaseapp.com",
    databaseURL: "https://cosmos-4d16d.firebaseio.com",
    projectId: "cosmos-4d16d",
    storageBucket: "cosmos-4d16d.appspot.com",
    messagingSenderId: "245528862235",
    appId: "1:245528862235:web:7cce46e945766f265122be"
  }
};

export default firebase.initializeApp(environment.firebaseConfig);
export const db = firebase.firestore();
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
