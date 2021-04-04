import React, {useState} from 'react';
import './Feed.css';
import './InputOption';
import Post from './Post';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import Subscriptionsicon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';


function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();

        setPosts([...posts])
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
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
            {posts.map((post)=> (
                <Post />
            ))}
            <Post name="Nakula Marvellio" description="This is a test" message="wow this is works"/>
        </div>
    )
}

export default Feed
