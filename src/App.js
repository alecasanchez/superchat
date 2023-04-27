import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAHjMlvuam5Jtl9j9rlhUNw4fSLlWtrPvw",
  authDomain: "chatmessageapp-39673.firebaseapp.com",
  projectId: "chatmessageapp-39673",
  storageBucket: "chatmessageapp-39673.appspot.com",
  messagingSenderId: "22095193310",
  appId: "1:22095193310:web:11f0476275bd1368934e4f",
  measurementId: "G-6KZ9KRRSPW"
})
//reference global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
