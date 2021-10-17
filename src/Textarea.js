import React, { useEffect, useState, useRef } from 'react';
import { getCurrentDate } from './FirebaseService'
import './textarea.css'

export const Textarea = (props) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
      }, [props.chat]);

    return <div className="chat" >
        {
            props.chat.map(msg => {
                return <div className="message">
                    <div className="messagetext">{msg}</div>
                    <div className="date">{getCurrentDate()}</div>
                </div>
            })
        }
        <div ref={messagesEndRef} />
    </div>;

}