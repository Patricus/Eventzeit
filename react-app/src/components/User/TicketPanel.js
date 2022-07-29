import styled from "styled-components";
import Ticket from "../Tickets/Ticket";

const TicketUL = styled.ul`
    display: flex;
`;

function TicketPanel({ tickets }) {
    return (
        <div className="tickets-panel">
            <>
                {tickets ? (
                    <TicketUL>
                        {tickets.map(ticket => {
                            return <Ticket key={ticket.id} ticket={ticket} />;
                        })}
                    </TicketUL>
                ) : (
                    <p>Loading</p>
                )}
            </>
        </div>
    );
}

export default TicketPanel;
