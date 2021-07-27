import React, { PureComponent } from 'react';
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from '../contexts/AuthContext';


const Chats = () => {
    const history = useHistory()
    const { user } = useAuth()

    const handleLogout = async () => {
        await auth.signOut()
        history.push('/')
    }
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Firechat
                </div>
                <div className="logout-tab" onClick={handleLogout}>
                    logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="c38bb8c9-f468-4763-b7b7-80945453362d"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats