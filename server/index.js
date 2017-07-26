const firebase = require('firebase/app');

const config = {
  apiKey: 'AIzaSyBX99EExi7mQ4nKVIEQvuuRr-DCwdNc4p4',
  authDomain: 'game-of-life-8aa81.firebaseapp.com',
  databaseURL: 'https://game-of-life-8aa81.firebaseio.com',
  projectId: 'game-of-life-8aa81',
  storageBucket: '',
  messagingSenderId: '555532962529'
};

firebase.initializeApp(config);

// deprecated express server
/* -------------------------
//server.js
const express = require('express')
const app = express()
// serve static assets from the public folder in project root
app.use(express.static('public'))
//
app.listen(3002, () => console.log('listening on port 3002'))
------------------------- */
