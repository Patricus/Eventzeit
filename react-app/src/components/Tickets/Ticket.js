import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../store/events";


function Ticket({ ticket }) {
    const dispatch = useDispatch()
    const event = useSelector(state => state.events[ticket.event_id])

    useEffect(() => {
        dispatch(acquireEvents())
    }, [dispatch])

    return (
        <div>
            {event && ticket &&
                <>
                    <h3>{event.name}</h3>
                    <p>Attendee: {ticket.attendee}</p>
                </>
            }
        </div>
    );
};

export default Ticket;
