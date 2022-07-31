import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeEvent } from "../../../store/events";

const DeleteEventModal = ({ event, setShowConfirmDeleteModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const cancelDelete = () => {
        setShowConfirmDeleteModal(false);
    };

    const deleteEvent = async e => {
        e.preventDefault();
        await dispatch(removeEvent(event.id));
        history.push("/events");
    };

    return (
        <main>
            <div className="modal-items-container">
                <h2 id="delete-user-msg">Are you sure you want to delete your event?</h2>
                <div className="modal-buttons">
                    <button onClick={cancelDelete}>Cancel</button>
                    <button onClick={deleteEvent}>Delete Event</button>
                </div>
            </div>
        </main>
    );
};

export default DeleteEventModal;
