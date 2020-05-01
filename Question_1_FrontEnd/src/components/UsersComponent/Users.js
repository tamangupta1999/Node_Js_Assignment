import React, { useState } from 'react';
import styles from './Users.module.css';
import Axios from 'axios';
import UserList from './UserList/UserList';

const Users = () => {
    const [sessionId, setSessionId] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('Start Session To Get All Data');
    setTimeout(() => {
        setMessage('')
    }, 5000)
    setTimeout(() => {
        setSessionId('');
    }, 5000 * 60)

    const onMessageHandler = (message) => {
        setMessage(message)
    }

    function startSessionHandler() {
        Axios.get('http://localhost:8080/session', { "credentials": "include" })
            .then(response => {
                let payload = response.data;
                console.log(response)
                setSessionId(payload.sessionID);
                setMessage(payload.message);
                onFetchUsers(payload.sessionID);
            }).catch(error => onMessageHandler(error.message));
    }
    const onFetchUsers = (sessionId) => {
        Axios.get('http://localhost:8080/user/all', { headers: { sessionID: sessionId } })
            .then(response => {
                if (response.data.users) {
                    let fetchedUsers = response.data.users;
                    setUsers(fetchedUsers);
                } else {
                    setMessage(response.data.message)
                }
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className={styles.Users}>
            {message}
            <UserList users={users}
                sessionID={sessionId}
                onMessageHandler={onMessageHandler}
                startSessionHandler={startSessionHandler}
                onFetchUsers={onFetchUsers} />
        </div>
    )
}

export default React.memo(Users);
