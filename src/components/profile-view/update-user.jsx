import React from 'react';
import axios from 'axios';


export default UpdateUser = (user) => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const email = localStorage.getItem('email');
    const birthday = localStorage.getItem('birthday');


    const handleUpdate = (e) => {
        // e.preventDefault();
        axios.put(`https://intense-shore-03094.herokuapp.com/users/${Username}`, {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        })
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch((e) => {
                console.log('error updating your info')
            });
    };

    delUser = (e) => {
        e.preventDefault();
        axios.delete('https://intense-shore-03094.herokuapp.com/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                alert('User profile deleted');
                window.open('/registration-view/registration-view.jsx');
            })
            .catch(e => {
                console.log('error deleting user')
            });
    };

    return (
        <form className='profile-form' onSubmit={(e) => handleUpdate(e)}>
            <h2>Want to change some info??</h2>
            <label>Username:</label>
            <input type='text' name='Username' defaultValue={user.Username} onChange={e => handleUpdate(e.target.value)} />
            <label>Password</label>
            <input type='password' name='password' defaultValue={user.Password} onChange={e => handleUpdate(e.target.value)} />
            <label>Email address</label>
            <input type='email' name='email' defaultValue={user.Email} onChange={e => handleUpdate(e.target.value)} />
            <button variant='primary' type='submit'>Update</button>
            <label>Birthday</label>
            <input type='date' name='birthday' defaultValue={user.Birthday} onChange={e => handleUpdate(e.target.value)} />


        </form>
    )
};


