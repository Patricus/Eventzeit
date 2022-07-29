import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { acquireEvents } from "../../../store/events";
import { Modal } from "../../Global/Elements/Modal";
import EventForm from "../Forms";
import TicketForm from "../../Tickets/TicketForm";
import Bookmark from "../../Bookmarks/Bookmark";
import "./eventDetails.css";
import MapView from "../../GoogleMaps/Map";

function EventDetailPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showTicketForm, setShowTicketForm] = useState(false);
  const { eventId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [showHiddenText, setShowHiddenText] = useState(false);

  const event = useSelector((state) => state.events[eventId]);
  const user = useSelector((state) => state.session.user);

  const title = useSelector((state) => state.events[eventId]?.name);

  const eventUrl = window.location.href;

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  useEffect(() => {
    if (!event) history.push('/404')
  },[event])

  const buyTickets = () => {
    setShowTicketForm(true);
  };

  return (
    <main>
      {event && (
        <div>
          <h1 className="event-title">{event.name}</h1>
        </div>
      )}
      <div
        style={{
          float: "left",
          width: "50%",
          minWidth: "444px",
          marginLeft: "30px",
        }}
      >
        {event ? (
          <div
            style={{
              width: "100%",
              backgroundColor: "red",
            }}
          >
            {/* <div
              className="event-title-container"
              style={{
                width: "40vw",
              }}
            ></div> */}
            <div className="button-container">
              {user && event.user_id === user.id && (
                // <div class="dropdown">
                //   <button onClick={() => setShowDropdown(true)} class="dropbtn">
                //     Dropdown
                //   </button>
                //   <div id="myDropdown" class="dropdown-content">
                //     <a href="#">Link 1</a>
                //     <a href="#">Link 2</a>
                //     <a href="#">Link 3</a>
                //   </div>
                // </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="event-button"
                  style={{ fontSize: "20px", padding: "6px 10px" }}
                >
                  ✎
                </button>
              )}
              <div className="bookmark-button">
                {user && (
                  <Bookmark
                    event_id={eventId}
                    user_id={user.id}
                    title={title}
                  />
                )}
              </div>
              {showModal && (
                <Modal
                  onClose={() => setShowModal(false)}
                  className="button-container-a"
                >
                  <EventForm event={event} setShowModal={setShowModal} />
                </Modal>
              )}
              <img
                src={`${event.event_image_url}`}
                alt={event.name}
                className="event-img"
              />
            </div>
            <h3 className="event-time">
              {new Date(event.date)
                .toString()
                .split(" G")[0]
                .split(":")
                .splice(0, 2)
                .join(":")}{" "}
            </h3>
            {/* START */}
            {/* IF DESCRIPTION IS MORE THAN 500 CHARS */}
            {event.description.length > 500 && (
              <div
                className="description-text"
                style={{
                  width: "50vw",
                }}
              >
                <h3>
                  {event.description.slice(0, 500)}
                  {showHiddenText && (
                    <span className="more-text">
                      {event.description.slice(500)}
                    </span>
                  )}
                  {!showHiddenText && <span className="dots">...</span>}
                  {!showHiddenText && (
                    <span>
                      <button
                        onClick={() => setShowHiddenText(!showHiddenText)}
                        style={{
                          fontFamily: "Eina-semibold",
                          color: "#FF521B",
                          background: "none",
                          marginLeft: "14px",
                          border: "none",
                          fontSize: "18px",
                        }}
                      >
                        More
                      </button>
                    </span>
                  )}
                  {showHiddenText && (
                    <span>
                      <button
                        onClick={() => setShowHiddenText(!showHiddenText)}
                        style={{
                          fontFamily: "Eina-semibold",
                          color: "#FF521B",
                          background: "none",
                          marginLeft: "14px",
                          border: "none",
                          fontSize: "18px",
                        }}
                      >
                        Less
                      </button>
                    </span>
                  )}
                </h3>
              </div>
            )}
            {/* IF DESCRIPTION IS LESS THAN 500 CHARS */}
            {event.description.length <= 500 && (
              <h3 className="description-text">{event.description}</h3>
            )}
            {/* END */}
            {/* <h3>What: {event.description}</h3> */}
            <div className="event-location">
              <h3>
                <span
                  style={{
                    fontFamily: "Eina-semibold",
                  }}
                >
                  Where:
                </span>{" "}
                {event.street_address} {event.city} {event.state}{" "}
                {event.zip_code}
              </h3>
            </div>
            <div className="event-ticket-price">
              <h3>Ticket Price: ${event.price}</h3>
            </div>
            <div className="event-tickets-available">
              <h3>Tickets Available: {event.tickets_available}</h3>
            </div>
            <div className="tickets-button">
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "1em",
                  marginBottom: "1em",
                }}
              >
                {user && (
                  <button
                    onClick={buyTickets}
                    style={{
                      fontSize: "160%",
                    }}
                  >
                    Buy Tickets
                  </button>
                )}
              </div>
            </div>
            {showTicketForm && (
              <Modal onClose={() => setShowTicketForm(false)}>
                <TicketForm
                  event={event}
                  setShowTicketForm={setShowTicketForm}
                  eventUrl={eventUrl}
                />
              </Modal>
            )}
            {/* {user && (
              <Bookmark event_id={eventId} user_id={user.id} title={title} />
            )} */}
          </div>
        ) : (
          <h1>Loading Event</h1>
        )}
      </div>
      <div
        style={{
          float: "left",
          width: "40%",
          marginTop: "20px",
          marginLeft: "40px",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            marginRight: "20px",
          }}
        >
          <MapView event={event} />
        </div>
      </div>
    </main>
  );
}

export default EventDetailPage;
