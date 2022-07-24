import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../store/events";
import styled from 'styled-components'
import { Modal } from "../Global/Elements/Modal";
import TicketForm from "./TicketForm";

const TicketEventName = styled.p`
cursor: pointer;
`

function Ticket({ ticket }) {
    const dispatch = useDispatch()
    const [showTicket, setShowTicket] = useState(false)
    const event = useSelector(state => state.events[ticket.event_id])

    useEffect(() => {
        dispatch(acquireEvents())
    }, [dispatch])

    return (
        <div>
            {event && ticket &&
                <>
                    <TicketEventName onClick={() => setShowTicket(true)} >{event.name}</TicketEventName>
                    <p>Attendee: {ticket.attendee}</p>
                </>
            }
            {showTicket &&
                <Modal onClose={() => setShowTicket(false)}>
                    <TicketForm event={event} ticket={ticket} setShowTicket={setShowTicket}/>
                </Modal>
            }
        </div>
    );
};

export default Ticket;
