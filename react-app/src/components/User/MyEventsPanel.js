import { useSelector } from "react-redux";
import EventsCard from "../Events/Elements/EventsCard";


function MyEventsPanel() {
    const user = useSelector((state) => state.session.user);
    const userEventsState = useSelector((state) => state.events);
    const userEvents = Object.values(userEventsState).filter(event => event.user_id === user.id)

    return (
        <div>
            <h2>Your Events</h2>
            {userEvents.map((event) => {
                return <EventsCard event={event} />
            })}
        </div>
    );
};

export default MyEventsPanel;
