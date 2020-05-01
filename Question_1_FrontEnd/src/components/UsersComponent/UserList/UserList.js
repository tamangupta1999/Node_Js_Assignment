import React, { useState } from 'react';
import styles from './UserList.module.css';
import axios from 'axios';
import UserForm from '../UserForm/UserForm';

const UserList = (props) => {
    const { users, sessionID, onMessageHandler, startSessionHandler, onFetchUsers } = props;
    const [btnClicked, SetBtnClicked] = useState(false);

    const deleteUserHandler = (email) => {
        axios.delete(`http://localhost:8080/user/delete?email=${email}`, { headers: { sessionID: sessionID } })
            .then(response => {
                onFetchUsers(sessionID)
                onMessageHandler(response.data.message);
            })
            .catch(error => onMessageHandler(error.message))
    }

    let userform = btnClicked ? <UserForm sessionID={sessionID} onFetchUsers={onFetchUsers} /> : null;

    let fetchedUsers = users.map(user => {
        return (
            <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className={styles.Btn} onClick={() => deleteUserHandler(user.email)}>Delete</button></td>
            </tr>
        );
    })
    return (
        <div className={styles.UserList}>
            <div className={styles.Top}>
                <h2 className={styles.UserHeading}>Users List</h2>
                <button className={styles.AddBtn} onClick={startSessionHandler}>Start Session</button>
                <button className={styles.AddBtn} onClick={() => SetBtnClicked(prevState => !prevState)}>Add User</button>
            </div>
            {userform}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchedUsers}
                </tbody>

            </table>
        </div>
    )
}

export default React.memo(UserList);
