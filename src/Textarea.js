import React, { useEffect, useState, useRef } from 'react';
import './textarea.css'

export const Textarea = (props) => {

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // let chatmessages = [];
    // if (props.messagelist ) {
    //     chatmessages = (props.messagelist.map(c => {
    //         return {
    //             text: c.text,
    //             leftside: c.From === props.fromemail && c.To === props.toemail
    //                 ? true : c.From === props.toemail && c.To === props.fromemail ? false : false
    //         }
    //     }));
    // }

    useEffect(() => {
        scrollToBottom()
    }, [props.chat]);

    //   console.log( props.fromemail);
    //   console.log( props.toemail);
    //   console.log(chatmessages);

    return <div className="chat" >
        {
            props.chat.map((msg, i) => {
                return <div key={i} className={(msg.leftside ? "message-right" : "") + " message"}>
                    <div className="messagetext">{msg.text}</div>
                    <div className="date">{msg.createdAt}</div>
                </div>
            })
        }
        <div ref={messagesEndRef} />
    </div>;

}