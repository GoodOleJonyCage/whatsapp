import React, { useEffect,useState,useRef} from 'react';
import {LoadChatLog,AddChat,SignInGoogle,SignOutGoogle,UserSignedIn} from './FirebaseService'
import {Users} from './Users'
import {SignIn} from './SignIn'
import {Textarea} from './Textarea'
import {Chat} from './Chat'
import fetch from 'cross-fetch';

export const Body = () => {

    //  const lst                = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    //  const[names,setnames]    = useState([]);
    //  const[phrases,setphrases]= useState([]);
    // const[signedin,setsignedin]   = useState(false);
    const[chat,setchat]      = useState([]);
    const[touser,settouser]  = useState({});
    const newMessageRef = useRef();
      
    useEffect(() => {
        // fetch("http://api.fungenerators.com/name/categories.json?start=0&limit=40", {
        //         method: "GET",
        //         mode: "cors",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(data => {
                
        //         setnames(data.contents[0].map(i => i.name));
        //         //console.log(names);
        //     });
            
        //     fetch("names.drycodes.com/30?nameOptions=funnyWords", {
        //         method: "GET",
        //         mode: "cors",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         setnames(data.map(i => i.name));
        //         //console.log(names);
        //     });
           
           //setchat([1]);
        //   console.log(UserSignedIn());
        //LoadChatLog(setchat,  '');
      }, []);

    const assignUser = (email) => {
        settouser(email);
        LoadChatLog(setchat,email);
    }
    
    return (
        <div className="body">
            <div className="bodyusers">
                <div className="bodyusers-header">
                    <span className="material-icons account-icon">account_circle</span>
                    <div className="bodyusers-header-left">
                        <span className="material-icons">loop</span>
                        <span className="material-icons">chat</span>
                        <span className="material-icons">more_vert</span>
                    </div>
                </div>
                <div className="user-search">
                    <span className="material-icons">search</span>
                    <input type="text" placeholder="Search text" ></input>
                </div>
                <Users  assignUser={assignUser}/>
            </div>
            <div className="messages-container">
                <div className="messages-container-header">
                    <div className="messages-container-header-left">
                        <img src="https://picsum.photos/200/300?random=1"></img>
                        <span className="top-username">Khan Jee</span>
                    </div>
                    <div className="message-header-right">
                        <span className="material-icons">search</span>
                        <span className="material-icons">more_vert</span>
                        <SignIn SignInGoogle={SignInGoogle} SignOutGoogle={SignOutGoogle} UserSignedIn={UserSignedIn} />
                    </div>
                </div>
                <Textarea chat={chat} />
                <div className="message-bar">
                    <div className="material-icons">sentiment_satisfied_alt</div>
                    <div className="material-icons">attach_file</div>
                    <input type="text" ref={newMessageRef}></input>
                    <div className="material-icons" onClick={() => { AddChat(setchat, newMessageRef.current, touser) }}>mic</div>
                </div>
            </div>
        </div>
    );
}
