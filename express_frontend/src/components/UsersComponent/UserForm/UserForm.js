import React, { useState } from 'react';
import styles from './UserForm.module.css';
import Axios from 'axios';

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message,setMessage] = useState('');
    setTimeout(()=>{
        setMessage('')
    },3000)

    const onAdduser = (event) => {
        event.preventDefault();
        console.log('clicked')
        Axios.post(`http://localhost:8080/user/add?email=${email}&name=${name}`)
            .then(response =>{
                setMessage(response.data.message);
                props.onFetchUsers();
                setName('');
                setEmail('');
            })
            .catch(error => setMessage(error.message))
    }
    return (
        <div className={styles.UserForm}>
            <h2>Add User Form</h2>
            {message}
            <form onSubmit={onAdduser}>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                <label >Email: </label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit" className={styles.SubmitBtn}>Send</button>
            </form>
        </div>
    )
}

export default UserForm;
