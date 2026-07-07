import  { cert, initializeApp } from "firebase-admin";

import serviceAccount  from "../serviceAccountKey.json" with {type:"json"};

// var admin = require("firebase-admin");


export const app =initializeApp({
  credential: cert(serviceAccount)
});
