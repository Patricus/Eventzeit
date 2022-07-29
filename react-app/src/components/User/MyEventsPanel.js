


function MyEventsPanel({ userEvents }) {

    return (
        <div>
            {userEvents.map((event) => {
                return <p>{event.name}</p>
            })}
        </div>
    );
};

export default MyEventsPanel;
