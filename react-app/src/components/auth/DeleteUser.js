import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { destroyUser } from "../../store/session";
import { logout } from "../../store/session";

const DeleteUserModal = ({ setShowConfirmDeleteModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const cancelDelete = () => {
    setShowConfirmDeleteModal(false)
  }

  const deleteUser = () => {
    dispatch(destroyUser(user.id))
    dispatch(logout())
    history.push("/events");
  };

  return (
    <main>
      <h2>Are you sure you want to delete your account?</h2>
      <button onClick={cancelDelete}>Cancel</button>
      <button onClick={deleteUser}>Delete Account</button>
    </main>
  )
}


export default DeleteUserModal;
