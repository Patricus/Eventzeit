import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeEvent } from "../../../store/events";
import "../Forms/eventForm.css";

const DeleteEventModal = ({ event, setShowConfirmDeleteModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cancelDelete = () => {
    setShowConfirmDeleteModal(false);
  };

  const deleteEvent = async (e) => {
    e.preventDefault();
    await dispatch(removeEvent(event.id));
    history.push("/events");
  };

  return (
    <main>
      <div
        className="modal-items-container"
        style={{
          fontFamily: "Eina-bold",
          color: "#A675A1",
        }}
      >
        <h2 id="delete-user-msg">
          Are you sure you want to delete your event?
        </h2>
        <div className="modal-buttons">
          <button
            onClick={cancelDelete}
            className="image-upload-label"
            style={{
              fontSize: "22px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Cancel
          </button>
          <button
            onClick={deleteEvent}
            className="image-upload-label"
            style={{
              fontSize: "22px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
};

export default DeleteEventModal;
