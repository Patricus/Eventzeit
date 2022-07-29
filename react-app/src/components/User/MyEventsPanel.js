import { useSelector } from "react-redux";
import EventsCard from "../Events/Elements/EventsCard";


function MyEventsPanel() {
    const user = useSelector((state) => state.session.user);
    const userEventsState = useSelector((state) => state.events);
    const userEvents = Object.values(userEventsState)

    return (
        <div>
            {userEvents.map((event) => {
                return <EventsCard event={event} />
            })}
        </div>
    );
};

export default MyEventsPanel;
