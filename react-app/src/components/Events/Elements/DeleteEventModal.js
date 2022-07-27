import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { destroyUser } from "../../store/session";
import { logout } from "../../store/session";

const DeleteEventModal = ({ setShowConfirmDeleteModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const cancelDelete = () => {
    setShowConfirmDeleteModal(false)
  }

  const deleteEvent = async (e) => {
    e.preventDefault();
    await dispatch(removeEvent(event.id));
    history.push("/events");
  };

  return (
    <main>
      <h2>Are you sure you want to delete your event?</h2>
      <button onClick={cancelDelete}>Cancel</button>
      <button onClick={deleteEvent}>Delete Event</button>
    </main>
  )
}


export default DeleteEventModal;
