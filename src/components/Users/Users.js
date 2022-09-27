import React, {useEffect, useState} from 'react';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = './api.json';
        fetch(url)
            .then(response => response.json())
            .then(response => setUsers(response))
            .catch(error => console.error(error));
    }, []);
    console.log(users);
    return (
        <div className='Users'>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;