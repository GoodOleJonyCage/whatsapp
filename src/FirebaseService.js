import React, { useEffect, useState } from 'react';
import moment from "moment";
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Chat } from './Chat'
import { SignIn } from './SignIn'
//import { useHistory } from "react-router-dom";

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
const userid = 1;

export function getCurrentDate(separator = '') {

    // let newDate = new Date()
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();

    // return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    return moment().format("DD-MM-YYYY hh:mm:ss")
}

export const SignInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect (provider);
}

export const SignOutGoogle = () => {
    // const history = useHistory();
    // history.push("/login");
    return auth.signOut(); 
}

export const UserSignedIn = () => {
    return auth.currentUser;
}

function randGen() {
    return Math.floor(Math.random() * 5);
}

const randomsentenceGenerator = () => {

    var verbs, nouns, adjectives, adverbs, preposition;
    nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
    verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
    adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
    preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    return content;
}

export const AddChat = (setchat) => {
    const db = firebase.firestore();
    db.collection("messages").add({
        text: randomsentenceGenerator(),
        From: 1,
        To: 2,
        createdAt: getCurrentDate()
    });
    LoadChatLog(setchat);
}

export const LoadChatLog = (setchat) => {
    var tmpmessages = [];
    const db = firebase.firestore();
    db.collection("messages")
        .orderBy("createdAt")
        .get()
        .then(snap => {
            snap.forEach(doc => {
                if (doc.data().From == userid) {
                    tmpmessages.push(doc.data().text);
                }
            });
            setchat(tmpmessages);
        });
}

export const FirebaseService = (props) => {

    const firestore = firebase.firestore();
    const [user] = useAuthState(auth);

    // const SignInGoogle = () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider);
    //     props.UserSignedIn(auth.currentUser);
    // }

    //LoadChatLog();
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
