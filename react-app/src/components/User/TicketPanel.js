import styled from "styled-components";
import Ticket from "../Tickets/Ticket";

const TicketsDiv = styled.div`
    width: 100%;
    overflow: hidden;
    height: 160px;
    margin: 10px 0 10px 10px;
`;

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
