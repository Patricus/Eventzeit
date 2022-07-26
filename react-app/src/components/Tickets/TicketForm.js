import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addOneTicket, deleteTicket, updateTicket } from "../../store/tickets";
import { acquireEvents } from "../../store/events"
import styled from 'styled-components';

const WhiteBG = styled.div`
background-color: white;
`



function TicketForm({ event, eventUrl, ticket = null, setShowTicket, setShowTicketForm }) {
    const [name, setName] = useState(ticket?.attendee || '')
    const [forSale, setForSale] = useState('False')
    const [errors, setErrors] = useState([])
    const [purchased, setPurchased] = useState(false)
    const [confirmRefund, setConfirmRefund] = useState(false)
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
        (forSale === 'False') ? setForSale('True') : setForSale('False')
    };

    const updateConfirmRefund = () => {
        setConfirmRefund(!confirmRefund)
    }

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
        if (!eventUrl) setErrors(['Could not find Event Url'])
        if (!ticket) {
            const data = {
                attendee: name,
                for_sale: forSale,
                user_id: user.id,
                event_id: event.id,
                event_url: eventUrl
            }
            dispatch(addOneTicket(data)).then(response=>{
                if (response.id)closeAfterPurchaseMessage();
                else setErrors(response)
            });
        }
        if (ticket) {
            const data = {
                attendee: name,
                for_sale: forSale,
                user_id: ticket.user_id,
                event_id: ticket.event_id,
                event_url: eventUrl
            }
            dispatch(updateTicket(ticket.id, data))
            setShowTicket(false)
        }
    }

    return (
        <WhiteBG>
            {errors && errors.map((error, i=0)=>{
                i++
                return <p key={i}>{error}</p>
            })}
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
                    {ticket && !confirmRefund &&
                        <div>
                            <label>Sell this Ticket</label>
                            <input
                                type="checkbox"
                                value={forSale}
                                checked={forSale === 'True'}
                                onChange={updateForSale}
                            ></input>
                        </div>
                    }
                    {ticket && !confirmRefund ?
                        <div>
                            <button type="submit" disabled={!name}>Update</button>
                            <button onClick={updateConfirmRefund}>Return Ticket</button>
                        </div>
                        :
                        <button type="submit" disabled={!name}>Submit</button>
                    }
                    {ticket && confirmRefund &&
                        <div>
                            <h2>Are you sure you want to return this ticket?</h2>
                            <button onClick={returnMyTicket}>Confirm</button><button onClick={updateConfirmRefund}>Cancel</button>
                        </div>
                    }
                </form>
            }
            {purchased &&
                <div>
                    <h2>Purchase Complete</h2>
                    <p>Enjoy your time at {event.name}</p>
                </div>
            }
        </WhiteBG>
    );
};

export default TicketForm;
