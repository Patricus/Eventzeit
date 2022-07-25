import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTickets } from "../../store/tickets";
import Ticket from "../Tickets/Ticket";
import styled from 'styled-components';
import { destroyUser, logout } from "../../store/session";

const Avatar = styled.img`
width: 50px;
height: 50px;
`

function Dashboard() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const ticketsState = useSelector(state => state.tickets)
    const tickets = Object.values(ticketsState)

    useEffect(() => {
        dispatch(getAllTickets(user.id))
    }, [dispatch, user])

    const deleteUser = async () => {
        await dispatch(destroyUser(user.id))
        history.push("/events")
    }

    return (
        <main>
            <h1>My Dashboard</h1>
            <Avatar src={user.avatar} alt='user avatar' />
            <h3>Tickets</h3>
            {tickets ?
                <ul>
                {tickets.map(ticket=>{
                    return <Ticket key={ticket.id} ticket={ticket} />
                })}
                </ul>
                : <p>Loading</p>
                }
                <div>
                    <button onClick={deleteUser}>Delete User Account</button>
                </div>
        </main>
    );
};

export default Dashboard;
