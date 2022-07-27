import { useState, useEffect } from 'react';
import styled from 'styled-components';

const UserInfoBox = styled.div`
display: flex;
flex-direction: row;
height: 200px;
width: 500px;
margin-left: 30px;
align-items: center;
border-radius: 20px
`;
const Avatar = styled.img`
width: 140px;
height: 140px;
margin: 0 15px;
`;
const UserInfo = styled.div`
height: 160px;
width: 300px;
margin: 28px 0 0 0;
border-radius: 20px;
`
const Username = styled.p`
font-size: 50px;
margin: 0 0 0 10px;
`
const TicketsMessage = styled.p`
margin: 10px 0 0 20px;
`

function UserPanel({ user, tickets }) {
    const [word, setWord] = useState('tickets')

    useEffect(()=>{
        if(tickets.length === 1) setWord('ticket')
        else setWord('tickets')
    }, [tickets])

    return (
        <UserInfoBox>
            <Avatar src={user.avatar} alt="user avatar" />
            <UserInfo>
                <Username>Hi, {user.username}!</Username>
                <TicketsMessage>You have {tickets.length} {word}</TicketsMessage>
            </UserInfo>
        </UserInfoBox>
    );
};

export default UserPanel;
