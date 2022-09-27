import React from 'react';
import './User.css';

const User = props => {
    const {id, email, username} = props.user;
    const {name, company, address} = props.user.profile;
    const idFunc = id => {
        console.log(email);
    };
    return (
        <div className='User'>
            <div>
                <h2 style={{textAlign: "center"}}>Name: {name}</h2>
                <p>
                    <span><strong>Id:</strong> {id}</span><br />
                    <span><strong>Username:</strong> {username}</span><br />
                    <span><strong>Email:</strong> {email}</span><br />
                    <span><strong>Company:</strong> {company}</span><br />
                    <span><strong>Address:</strong> {address}</span><br />
                </p>
            </div>
            <div style={{textAlign: "center"}}>
                <button onClick={() => idFunc(id)}>Submit</button>
            </div>
        </div>
    );
};

export default User;