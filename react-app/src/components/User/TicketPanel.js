import { useState } from 'react';
import styled from 'styled-components';
import Ticket from '../Tickets/Ticket';

const TicketUL = styled.ul`
width: 320px;
margin: 0;
`
const TicketsDiv = styled.div`
width: 320px;
height: 132px;
margin: 0;
`

function TicketPanel({ tickets }) {
    const [showTickets, setShowTickets] = useState(false)

    return (
        <TicketsDiv>
            {tickets ? (
                <TicketUL>
                    {tickets.map((ticket) => {
                        return <Ticket key={ticket.id} ticket={ticket} />;
                    })}
                </TicketUL>
            ) : (
                <p>Loading</p>
            )}
        </TicketsDiv>
    );
};

export default TicketPanel;
