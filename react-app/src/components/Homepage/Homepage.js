import React from 'react';
import { useSelector } from 'react-redux';

function Homepage() {

    const user = useSelector(state => state.session.user)

    return (
        <main>
            <p>{user.username}</p>
            <img src={user.avatar}></img>
        </main>
    );
};

export default Homepage;
