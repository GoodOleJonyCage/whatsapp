import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
//import { getFirestore } from "firebase/firestore"
//import firebase from 'firebase/compat/app'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { doc, setDoc, Timestamp } from "firebase/firestore";

import { Chat } from './Chat'
import { SignIn } from './SignIn'


firebase.initializeApp({
    apiKey: "AIzaSyApDwYPGL0THwlnBG58SURoRjegw1mCx94",
    authDomain: "whatsapp-f98bf.firebaseapp.com",
    projectId: "whatsapp-f98bf",
    storageBucket: "whatsapp-f98bf.appspot.com",
    messagingSenderId: "500011062804",
    appId: "1:500011062804:web:12621420c608687efc7901",
    measurementId: "G-D071M9NBN9"
});

const auth = firebase.auth();

export const SignInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
}

export const SignOutGoogle = () => {
    return auth.signOut();
}

export const UserSignedIn = () => {
    return auth.currentUser;
}

export const FirebaseService = (props) => {

    const firestore = firebase.firestore();
    const [user] = useAuthState(auth);
    const userid = 1;
    
    const SignInGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
        props.UserSignedIn(auth.currentUser);
    }

   
    const LoadChatLog = () => {
        var tmpmessages = [];
        const db = firebase.firestore();
        db.collection("messages")
            .get()
            .then(snap => {
                snap.forEach(doc => {
                    if (doc.data().From == userid) {
                        tmpmessages.push(doc.data().text);
                    }
                });
                props.LoadChatMessages(tmpmessages);
            });
    }

    // const AddChat = () => {
    //     // for (var i = 0; i < 10; i++) {
    //     //     db.collection("messages").add({
    //     //         text: "Anbu Selvan",
    //     //         photoURL: "anbu.selvan@email.com",
    //     //     })
    //     // }
    // }

    LoadChatLog();
    return null;
    //<Chat GetChatLog={GetChatLog} />
    // user ?
    //     // <SignOutGoogle.js?></SignOutGoogle.js>
    //     <Chat
    //         GetChatLog={GetChatLog} /> :
    //     <SignIn
    //         user={user}
    //         UserSignedIn={UserSignedIn}
    //         SignInGoogle={SignInGoogle}
    //         SignOutGoogle={SignOutGoogle}
    //     />

}
 