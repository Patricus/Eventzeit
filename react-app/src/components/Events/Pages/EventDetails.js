import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { acquireEvents } from "../../../store/events";
import { Modal } from "../../Global/Elements/Modal";
import EventForm from "../Forms";
import TicketForm from "../../Tickets/TicketForm";
import Bookmark from "../../Bookmarks/Bookmark";
import MapView from "../../GoogleMaps/Map";


function EventDetailPage() {
  const dispatch = useDispatch();
  const [showTicketForm, setShowTicketForm] = useState(false);
  const { eventId } = useParams();

  const [showModal, setShowModal] = useState(false);

  const event = useSelector((state) => state.events[eventId]);
  const user = useSelector((state) => state.session.user);

  const title = useSelector(state=>state.events[eventId]?.name)

  const eventUrl = window.location.href

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  const buyTickets = () => {
    setShowTicketForm(true);
  };

  return (
    <main>
      {event ? (
        <>
          <h1>Event: {event.name}</h1>
          {user && event.user_id === user.id && (
            <button onClick={() => setShowModal(true)}>Edit Event</button>
          )}
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EventForm event={event} setShowModal={setShowModal} />
            </Modal>
          )}
          <img src={`${event.event_image_url}`} alt={event.name} />
          <h3>
            When: {event.date.split(" G")[0].split(":").splice(0, 2).join(":")}{" "}
          </h3>
          <h3>What: {event.description}</h3>
          <h3>
            Where: {event.street_address} {event.city} {event.state}{" "}
            {event.zip_code}
          </h3>
          <h3>Ticket Price: ${event.price}</h3>
          <h3>Tickets Available: {event.tickets_available}</h3>
          {user &&
          <button onClick={buyTickets}>Buy Tickets</button>
          }
          {showTicketForm && (
            <Modal onClose={() => setShowTicketForm(false)}>
              <TicketForm event={event} setShowTicketForm={setShowTicketForm} eventUrl={eventUrl} />
            </Modal>
          )}
          {user && <Bookmark event_id={eventId} user_id={user.id} title={title} />}
        </>
      ) : (
        <h1>Loading Event</h1>
      )}
      <MapView event={event} />
    </main>
  );
}

export default EventDetailPage;
