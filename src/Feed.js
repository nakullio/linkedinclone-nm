import React, {useState, useEffect} from 'react';
import './Feed.css';
import './InputOption';
import Post from './Post';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import Subscriptionsicon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './firebase';
import firebase from 'firebase';


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    // useEffect hook, special hooks that allow us to fire the code when the component load,
    // it also fire off when we rerender the component, after passing the dependecies
    useEffect(()=> {
        // onSnapshot will give us realtime connection to the database
        // this setup will help us to make realtime listener for update from database cloud
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))

    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Nakula',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            // this timestamp will follow based on region we are at, different place will have different time records
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });

        // clear the text dialog
        setInput('');
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>

                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70b5f9"/>
                    <InputOption Icon={Subscriptionsicon} title='Video' color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBC0"/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7fc15e"/>


                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: {name, description, message, photoUrl} })=> (
                <Post 
                // key is very important when you render a list
                // because, without key, react will rerender the entire list
                // so with the key, react only render the new item on the list
                // and this way its make reactapp more light
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
