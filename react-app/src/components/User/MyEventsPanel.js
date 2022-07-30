import { useSelector } from "react-redux";
import EventsCard from "../Events/Elements/EventsCard";

function MyEventsPanel() {
  const user = useSelector((state) => state.session.user);
  const userEventsState = useSelector((state) => state.events);
  const userEvents = Object.values(userEventsState).filter(
    (event) => event.user_id === user.id
  );

  return (
    <div className="my-event-panel">
      <h2 style={{ padding: "6px" }}>Your Events</h2>
      <div className="eventsHolder">
        {userEvents.length ? (
          userEvents.map((event) => {
            return (
              <div
                style={{
                  height: "400px",
                  width: "400px",
                }}
              >
                <EventsCard key={event.id} event={event} />
              </div>
            );
          })
        ) : (
          <h2>You Don't have any events, yet!</h2>
        )}
      </div>
    </div>
  );
}

export default MyEventsPanel;
