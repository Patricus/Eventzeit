import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { acquireEvents } from "../../../store/events";
import { Modal } from "../../Global/Elements/Modal";
import EventForm from "../Forms";

function EventDetailPage() {
  const dispatch = useDispatch();
  const { eventId } = useParams();

  const [showModal, setShowModal] = useState(false);

  const event = useSelector(state => state.events[eventId]);
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  return (
    <main>
      {event ? (
        <>
          <h1>Event: {event.name}</h1>
          {event.user_id === user.id && (
            <button onClick={() => setShowModal(true)}>Edit Event</button>
          )}
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EventForm event={event} />
            </Modal>
          )}
          <img src={`${event.event_image_url}`} alt={event.name} />
          <h3>When: {event.date}</h3>
          <h3>What: {event.description}</h3>
          <h3>
            Where: {event.street_address} {event.city} {event.state} {event.zip_code}
          </h3>
          <h3>Tickets Available: {event.tickets_available}</h3>
          <Link to={`{/events/${event.id}/tickets}`}>Buy Tickets</Link>
        </>
      ) : (
        <h1>Loading Event</h1>
      )}
    </main>
  );
}

export default EventDetailPage;
