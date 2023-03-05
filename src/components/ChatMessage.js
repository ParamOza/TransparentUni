import React from 'react';
import { useState, useEffect } from 'react';
import firebase from '../firebase';

function ChatMessage(props) {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
          setUser(user);
          setUserId(user.uid);
          
        })
      }, []);
    const { text, uid } = props.message;
    const messageClass = uid === userId ? 'sent' : 'received';
  
    return (
      <div className={`message ${messageClass}`}>
        <p class = "chat-p"> {text}</p>
      </div>
    )
  }

export default ChatMessage;