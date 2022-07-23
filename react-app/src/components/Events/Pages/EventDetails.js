import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { acquireEvents } from "../../../store/events";

function EventDetailPage() {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector(state => state.events[eventId]);

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

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
      <Link to={`{/events/${event.id}/tickets}`}>Buy Tickets</Link>
    </main>
  );
}

export default EventDetailPage;
