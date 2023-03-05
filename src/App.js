import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Navmenu from './components/Navmenu';
import firebase from './firebase';
import './App.css';
import About from './components/About';
import { auth } from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    })
  }, []);

  return (
    <div className="base">
      <Navmenu/>
      <Body/>
      <Footer/>
    </div>
  );
}

function Chats() {
  const ref = useRef();
  const messagesList = firebase.firestore.collection('messages');
  const query = messagesList.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesList.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    ref.current.scrollIntoView({ behavior: 'smooth' });

    }  

    return(<>
       <main> 
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
          {<span ref={ref}></span>}
       </main>
          <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <button type="submit">Send</button>
        </form>
    </>)
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}

export default App;
