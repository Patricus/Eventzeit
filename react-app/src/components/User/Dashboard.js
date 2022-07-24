import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets } from "../../store/tickets";
import Ticket from "../Tickets/Ticket";
import styled from 'styled-components';

const Avatar = styled.img`
width: 50px;
height: 50px;
`

function Dashboard() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const tickets = Object.values(useSelector(state => state.tickets))

    useEffect(() => {
        dispatch(getAllTickets(user.id))
    }, [dispatch, user])

    return (
        <main>
            <h1>My Dashboard</h1>
            <Avatar src={user.avatar} alt='user avatar' />
            <h3>Tickets</h3>
            {tickets &&
                <ul>
                {tickets.map(ticket=>{
                    return <Ticket key={ticket.id} ticket={ticket} />
                })}
                </ul>}
        </main>
    );
};

export default Dashboard;
