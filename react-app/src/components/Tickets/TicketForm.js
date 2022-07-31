import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOneTicket, deleteTicket, updateTicket } from "../../store/tickets";
import { acquireEvents } from "../../store/events";
import styled from "styled-components";
import { Modal } from "../Global/Elements/Modal";
import "../auth/authForm.css";

const WhiteBG = styled.div`
    background-color: white;
`;

function TicketForm({ event, eventUrl = null, ticket = null, setShowTicket, setShowTicketForm }) {
    const [showRefundTicket, setShowRefundTicket] = useState(false);
    const [name, setName] = useState(ticket?.attendee || "");
    const [errors, setErrors] = useState([]);
    const [purchased, setPurchased] = useState(false);
    const [confirmRefund, setConfirmRefund] = useState(false);
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const updateName = e => {
        setName(e.target.value);
    };

    // useEffect(() => {
    //     console.log("showRefundTicket", showRefundTicket);
    // }, [showRefundTicket]);

    const closeAfterPurchaseMessage = () => {
        setPurchased(true);
        setTimeout(() => {
            setShowTicketForm(false);
            dispatch(acquireEvents());
        }, 3750);
    };

    const returnMyTicket = e => {
        e.preventDefault();
        dispatch(deleteTicket(ticket));
        setShowTicket(false);
    };

    const onPurchase = async e => {
        e.preventDefault();
        if (!eventUrl && !ticket) setErrors(["Could not find Event Url"]);
        if (!ticket) {
            const data = {
                attendee: name,
                user_id: user.id,
                event_id: event.id,
                event_url: eventUrl,
            };
            const response = await dispatch(
                addOneTicket(data.attendee, data.user_id, data.event_id, data.event_url)
            );
            if (response.id) {
                closeAfterPurchaseMessage();
            } else {
                setErrors(response.errors);
            }
        }
        if (ticket) {
            const data = {
                attendee: name,
                user_id: ticket.user_id,
                event_id: ticket.event_id,
                event_url: ticket.event_url,
            };

            const response = await dispatch(updateTicket(ticket.id, data));
            console.log("response", response);
            if (response.id) {
                setShowTicket(false);
            } else {
                console.log("response", response);
                setErrors(response.errors);
            }
        }
    };

    return (
        <>
            {showRefundTicket && (
                <Modal onClose={() => setShowRefundTicket(false)}>
                    <div className="modal-items-container">
                        <div className="modal-title">
                            <h2>Are you sure you want to return this ticket?</h2>
                        </div>
                        <div className="modal-buttons">
                            <button onClick={() => setShowRefundTicket(false)}>Cancel</button>
                            <button onClick={returnMyTicket}>Confirm</button>
                        </div>
                    </div>
                </Modal>
            )}
            <WhiteBG>
                <div className="modal-title">
                    {ticket ? <h2>Update Ticket</h2> : <h2>Purchase Ticket</h2>}
                </div>
                {errors.length > 0 && (
                    <div
                        style={{
                            backgroundColor: "rgba(255, 0, 0, 0.35)",
                            padding: "12px 21px",
                            margin: "10px 10px",
                            borderRadius: "15px",
                        }}>
                        <ul>
                            {errors.map((error, i = 0) => {
                                i++;
                                return <li key={i}>{error}</li>;
                            })}
                        </ul>
                    </div>
                )}
                {!purchased && (
                    <form onSubmit={onPurchase}>
                        <div className="modal-items">
                            <label>Name of Attendee</label>
                            <input type="text" value={name} onChange={updateName}></input>
                        </div>
                        <div className="modal-buttons">
                            {ticket ? (
                                <>
                                    <button type="submit">Update</button>
                                    <button type="button" onClick={() => setShowRefundTicket(true)}>
                                        Return Ticket
                                    </button>
                                </>
                            ) : (
                                <button type="submit">Purchase</button>
                            )}
                        </div>
                    </form>
                )}
                {purchased && (
                    <div>
                        <h2>Purchase Complete</h2>
                        <p>Enjoy your time at {event.name}</p>
                    </div>
                )}
            </WhiteBG>
        </>
    );
}

export default TicketForm;
