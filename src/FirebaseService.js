import React, { useEffect, useState } from 'react';
import moment from "moment";
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {  onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {  setDoc, Timestamp } from "firebase/firestore";
import { Chat } from './Chat'
import { SignIn } from './SignIn'
import { Route } from 'react-router-dom'
import { useHistory } from "react-router-dom";

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
    auth.signInWithRedirect(provider)
}

export const SignOutGoogle = () => {
    return auth.signOut()
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

 export const AddUser = (email) => {
    const db = firebase.firestore();
    db.collection("users").add({
        createdAt: getCurrentDate(),
        name : email
    });
}

export const AddChat = (setchat, newtextref, email, fromEmail) => {
    const db = firebase.firestore();
    db.collection("messages").add({
        //text: randomsentenceGenerator(),
        text: newtextref.value,
        From: fromEmail,
        To: email,
        createdAt: getCurrentDate()
    });
    newtextref.value = "";
    LoadChatLog(setchat, email,fromEmail);
}


export const LoadChatLog = (setchat, toemail, fromEmail) => {
    var tmpmessages = [];
    const db = firebase.firestore();
    db.collection("messages")
        .orderBy("createdAt")
        .get()
        .then(snap => {
            snap.forEach(doc => {
                if (
                    doc.data().From === fromEmail && doc.data().To === toemail ||
                    doc.data().From === toemail && doc.data().To === fromEmail
                ) {
                    tmpmessages.push(
                        {
                            text: doc.data().text,
                            createdAt : doc.data().createdAt,
                            leftside: doc.data().from === fromEmail && doc.data().To === toemail
                                ? true : doc.data().From === toemail && doc.data().To === fromEmail

                        });
                }
            });
            setchat(tmpmessages);
        });
}
// const db = firebase.firestore();
// db.collection("messages")//.where("state", "==", "CA")
//     .onSnapshot((snapshot) => {
//         snapshot.docChanges().forEach((change) => {
//             console.log(change.doc.data());
//             //LoadChatLog(null,change.doc.data().to, change.doc.data().from)
//         });
//     });