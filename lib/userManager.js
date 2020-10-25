import React, { useState } from 'react';
import { firebase } from '../lib';

export default function manage() {
  const [user, setUser] = useState();


  const addUser = async (req) => {
    debugger
    console.log("adding user: ", req);
    try {

      const response = firebase.auth().createUserWithEmailAndPassword(req.email, req.password);
      response.catch(function (error) {
        // Handle Errors here.
        console.error("Error while registering user", error)
        var errorCode = error.code;
        var errorMessage = error.message;

      });
    }
    catch (error) {
      console.error("Error while registering user", error)
    }
  };

  const getActiveUser = async (user) => {
    console.log("getting active user: ", user);

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser();
      }
    });
  }
  return { addUser, getActiveUser, setUser };
}



