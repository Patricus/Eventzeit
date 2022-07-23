import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { acquireEvents } from "../../../store/events";
import { Modal } from '../../Global/Elements/Modal/index'
import TicketForm from "../../Tickets/TicketForm";

function EventDetailPage() {
  const dispatch = useDispatch();
  const [showTicketForm, setShowTicketForm] = useState(false)
  const { eventId } = useParams();
  const event = useSelector(state => state.events[eventId]);

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  const buyTickets = () => {
    setShowTicketForm(true)
  }

  return (
    <main>
      <h1>Event: {event.name}</h1>
      <img src={`${event.event_image_url}`} alt={event.name} />
      <h3>When: {event.date}</h3>
      <h3>What: {event.description}</h3>
      <h3>
        Where: {event.street_address} {event.city} {event.state} {event.zip_code}
      </h3>
      <h3>Tickets Avilable: {event.tickets_available}</h3>
      <button onClick={buyTickets}>Buy Tickets</button>
      {showTicketForm &&
      <Modal onClose={()=>setShowTicketForm(false)}>
        <TicketForm event={event} />
      </Modal>
      }
    </main>
  );
}

export default EventDetailPage;
