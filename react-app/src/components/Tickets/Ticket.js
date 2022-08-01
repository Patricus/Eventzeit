import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../store/events";
import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";
import { Modal } from "../Global/Elements/Modal";
import TicketForm from "./TicketForm";

import ticketBG from "../../images/stock-ticket.jpg";
import { Link } from "react-router-dom";

const TicketRectangle = styled.div`
    position: relative;
    bottom: -40px;
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 320px;
    align-items: center;
`;

const TicketBGImage = styled.img`
    position: absolute;

    height: 150px;
    width: 320px;
    z-index: -1;
    margin: 0px;
`;

const TicketInfo = styled.div`
    margin: 8px 0 0 60px;
    width: 110px;
`;

const TicketEventName = styled.p`
    position: relative;
    top: -20px;
    margin: 0 0 0 12px;
    height: 60px;
    width: 105px;
    font-size: 14px;
`;

const AttendeeName = styled.p`
    position: absolute;
    bottom: 0px;
    margin: 0 0 0 12px;
    font-size: 14px;
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    width: 105px;
    max-height: 40px;
`;

const QRdiv = styled.div`
    margin: 32px 0 0 10px;
`;

function Ticket({ ticket }) {
    const dispatch = useDispatch();
    const [showTicket, setShowTicket] = useState(false);
    const event = useSelector(state => state.events[ticket.event_id]);

    useEffect(() => {
        dispatch(acquireEvents());
    }, [dispatch]);

    return (
        <>
            {event && ticket && (
                <div>
                    <TicketRectangle>
                        <button
                            onClick={() => setShowTicket(true)}
                            style={{ position: "absolute", top: "-25px", left: "95px" }}>
                            Update Ticket
                        </button>
                        <TicketBGImage src={ticketBG} alt="stock-ticket-image" />
                        <TicketInfo>
                            <TicketEventName>{event.name}</TicketEventName>
                            <AttendeeName>{ticket.attendee}</AttendeeName>
                        </TicketInfo>
                        <QRdiv>
                            <Link to={`events/${ticket.event_id}`}>
                                <QRCodeSVG value={ticket.event_url} size="64" className="QRCode" />
                            </Link>
                        </QRdiv>
                    </TicketRectangle>
                </div>
            )}
            {showTicket && (
                <Modal onClose={() => setShowTicket(false)}>
                    <TicketForm event={event} ticket={ticket} setShowTicket={setShowTicket} />
                </Modal>
            )}
        </>
    );
}

export default Ticket;
