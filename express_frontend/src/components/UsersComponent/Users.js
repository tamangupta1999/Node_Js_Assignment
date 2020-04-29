import React, { useState, useEffect } from 'react';
import styles from './Users.module.css';
import Axios from 'axios';
import UserList from './UserList/UserList';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    setTimeout(()=>{
        setMessage('')
    },5000)

    const onDeleteHandler = (message) => {
        setMessage(message)
    }
    const onFetchUsers = () => {
        Axios.get('http://localhost:8080/user/all')
            .then(response => {
                let fetchedUsers = response.data.users;
                setUsers(fetchedUsers);
                console.log(fetchedUsers)
            })
            .catch(error => console.log(error.message))
    }
    useEffect(() => {
        onFetchUsers()
    }, []);


    return (
        <div className={styles.Users}>
            {message}
            <UserList users={users} onDeleteHandler={onDeleteHandler} onFetchUsers={onFetchUsers} />
        </div>
    )
}

export default Users;
