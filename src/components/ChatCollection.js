import firebase from '../firebase';
import { db } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Fragment, useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import Navmenu from './Navmenu';
import MentorPicker from './MentorPicker';
import { useSelector, useDispatch } from 'react-redux';


const ChatCollection = () => {
    const [user, setUser] = useState(null);
    const ref = useRef();
    const messagesList = db.collection('messages');
    const query = messagesList.orderBy('createdAt');

    const selectedMentor = useSelector(state => state.mentor.mentor);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, []);

    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = user;
  
      await messagesList.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      ref.current.scrollIntoView({ behavior: 'smooth' });
  
      }  
  
      return(<div class = "base">
        <Navmenu />

        {
          !user ? <div className="chat-login">Please log in to chat</div> :
          (!selectedMentor ? <MentorPicker /> : 
          <Fragment>
          <main> 
             {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
             {<span ref={ref}></span>}
          </main>
          <div class = "container">
          <form class="chatform mb-4 col text-center" onSubmit={sendMessage}>
              <div class = "row">
               <input class = "chat-input" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
               <button type="submit">Send</button>
              </div>
           </form>
           </div>
           </Fragment>)
        }
      </div>);
  }

export default ChatCollection;