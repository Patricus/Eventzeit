import { useSelector } from "react-redux";
import EventsCard from "../Events/Elements/EventsCard";

function MyEventsPanel() {
    const user = useSelector(state => state.session.user);
    const userEventsState = useSelector(state => state.events);
    const userEvents = Object.values(userEventsState).filter(event => event.user_id === user.id);

    return (
        <div className="my-event-panel">
            <h2 style={{ padding: "6px" }}>Your Events</h2>
            <div className="eventsHolder">
                {userEvents.map(event => {
                    return <EventsCard key={event.id} event={event} />;
                })}
            </div>
        </div>
    );
}

export default MyEventsPanel;
