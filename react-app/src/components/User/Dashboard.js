import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets } from "../../store/tickets";
import Ticket from "../Tickets/Ticket";


function Dashboard() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const tickets = Object.values(useSelector(state => state.tickets))

    useEffect(() => {
        dispatch(getAllTickets(userId))
    }, [dispatch, userId])

    return (
        <main>
            <h1>My Dashboard</h1>
            {tickets &&
                <ul>
                    {tickets.forEach(ticket=>{
                        <Ticket key={ticket.id} ticket={ticket} />
                    })}
                </ul>}
        </main>
    );
};

export default Dashboard;
