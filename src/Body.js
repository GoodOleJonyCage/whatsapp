import React, { useEffect, useState, useRef } from 'react';
import { LoadChatLog,AddUser, AddChat, SignInGoogle, SignOutGoogle, UserSignedIn } from './FirebaseService'
import { Users } from './Users'
import { SignIn } from './SignIn'
import { Textarea } from './Textarea'
import { Chat } from './Chat'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ConstructionOutlined } from '@mui/icons-material';
import fetch from 'cross-fetch';
import firebase from "firebase/app";

export const Body = () => {

    const [loaded, setloaded] = useState(false);
    const [chat, setchat] = useState([]);
    const [touser, settouser] = useState({});
    const newMessageRef = useRef();
    const newUserRef = useRef();
        
    let db = firebase.firestore();
    //messages
    let messagesRef = db.collection('messages').orderBy("createdAt")
    const [messagelist] = useCollectionData(messagesRef, { idField: 'id' })
    //users
    let usersRef = db.collection('users').orderBy("createdAt")
    const [userlist] = useCollectionData(usersRef, { idField: 'id' })

    const assignUser = (email) => {
        settouser(email);
        LoadChatLog(setchat, email, UserSignedIn()?.email);
    }

    return (
        <div className="body">
            <div className="bodyusers">
                <div className="bodyusers-header">
                    <div className="bodyusers-header-account-area">
                        <span className="material-icons account-icon">account_circle</span>
                    </div>
                    <div className="bodyusers-header-left">
                        <span className="material-icons">loop</span>
                        <span className="material-icons">chat</span>
                        <span className="material-icons">more_vert</span>
                    </div>
                </div>
                <div className="user-search">
                    <span className="material-icons search-icon">search</span>
                    <input ref={newUserRef} type="text" placeholder="Search text" ></input>
                    <span onClick={()=>{AddUser(newUserRef.current.value);newUserRef.current.value = "";}}
                    class="material-icons">person_add_alt</span>
                </div>
                <Users 
                userlist={userlist}
                assignUser={assignUser} />
            </div>
            <div className="messages-container">
                <div className="messages-container-header">
                    <div className="messages-container-header-left">
                        <img src="https://picsum.photos/200/300?random=1"></img>
                        <span className="top-username">{UserSignedIn()?.email}</span>
                    </div>
                    <div className="message-header-right">
                        <span className="material-icons">search</span>
                        <span className="material-icons">more_vert</span>
                        <SignIn SignInGoogle={SignInGoogle} SignOutGoogle={SignOutGoogle} UserSignedIn={UserSignedIn} />
                    </div>
                </div>
                <Textarea 
                    // messagelist={messagelist} 
                    usersignedin={UserSignedIn()}
                    chat={chat} 
                    fromemail={UserSignedIn()?.email} 
                    toemail={touser} />
                <div className="message-bar">
                    <div className="material-icons">sentiment_satisfied_alt</div>
                    <div className="material-icons">attach_file</div>
                    <input type="text" ref={newMessageRef}></input>
                    <div className="material-icons" onClick={() => { AddChat(setchat, newMessageRef.current, touser, UserSignedIn()?.email) }}>mic</div>
                </div>
            </div>
        </div>
    );
}
