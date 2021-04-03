import React from 'react';
import './Sidebar.css';
import  { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>Nakula Marvellio</h2>
            <h4>nakula@marvellio.com</h4>

            </div> 

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>

                </div>

            </div>
        </div>
    )
}

export default Sidebar
