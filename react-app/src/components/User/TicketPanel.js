import styled from "styled-components";
import Ticket from "../Tickets/Ticket";

const TicketUL = styled.ul`
    display: flex;
`;

function TicketPanel({ tickets }) {
    return (
        <div className="tickets-panel">
            <>
                <h2
                    style={{
                        padding: "6px",
                        // marginLeft: "25vw",
                        fontFamily: "Eina-semibold",
                        fontSize: "40px",
                    }}>
                    Your Tickets
                </h2>
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
