import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addOneTicket, deleteTicket, updateTicket } from "../../store/tickets";
import { acquireEvents } from "../../store/events"


function TicketForm({ event, ticket = null, setShowTicket, setShowTicketForm }) {
    const [name, setName] = useState(ticket?.attendee || '')
    const [forSale, setForSale] = useState(false)
    const [errors, setErrors] = useState([])
    const [purchased, setPurchased] = useState(false)
    const user = useSelector(state => state.session.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (name.length < 25) setErrors([]);
        else setErrors(['Name must be 25 characters or less.']);
    }, [name]);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateForSale = () => {
        setForSale(!forSale);
    };

    const closeAfterPurchaseMessage = () => {
        setPurchased(true)
        setTimeout(() => {
            setShowTicketForm(false)
            dispatch(acquireEvents())
        }, 3750)
    }

    const returnMyTicket = (e) => {
        e.preventDefault();
        dispatch(deleteTicket(ticket))
        setShowTicket(false)
    }

    const onPurchase = (e) => {
        e.preventDefault();
        if (!name) setErrors(['Name field is required.'])
        if (!ticket) {
            const data = {
                attendee: name,
                for_sale: forSale,
                user_id: user.id,
                event_id: event.id
            }
            dispatch(addOneTicket(data));
            closeAfterPurchaseMessage();
        }
        if (ticket) {
            const data = {
                attendee: name,
                for_sale: forSale,
                user_id: ticket.user_id,
                event_id: ticket.event_id
            }
            dispatch(updateTicket(ticket.id, data))
            setShowTicket(false)
        }
    }

    return (
        <div>
            {!purchased &&
                <form onSubmit={onPurchase}>
                    <div>
                        {errors && errors.map((error, i) => (
                            <div key={i}>{error}</div>
                        ))}
                    </div>
                    <div>
                        <label>Name of Attendee</label>
                        <input
                            type="text"
                            value={name}
                            onChange={updateName}
                        ></input>
                    </div>
                    {ticket &&
                        <div>
                            <label>Sell this Ticket</label>
                            <input
                                type="checkbox"
                                value={forSale}
                                checked={forSale}
                                onChange={updateForSale}
                            ></input>
                        </div>
                    }
                    {ticket ?
                        <div>
                            <button type="submit" disabled={!name}>Update</button>
                            <button onClick={returnMyTicket}>Return Ticket</button>
                        </div>
                        :
                        <button type="submit" disabled={!name}>Submit</button>
                    }
                </form>
            }
            {purchased &&
                <div>
                    <h2>Purchase Complete</h2>
                    <p>Enjoy your time at {event.name}</p>
                </div>
            }
        </div>
    );
};

export default TicketForm;
