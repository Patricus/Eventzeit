import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { destroyUser } from "../../store/session";
import { logout } from "../../store/session";

const DeleteUserModal = ({ setShowConfirmDeleteModal }) => {
  const [demoError, setDemoError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const cancelDelete = () => {
    setShowConfirmDeleteModal(false);
  };

  const deleteUser = () => {
    if (user.id === 1) {
      setDemoError(true);
      return;
    }
    dispatch(destroyUser(user.id));
    dispatch(logout());
    history.push("/events");
  };

  return (
    <main>
      <div className="modal-items-container">
        {demoError && (
           <div className="error-container">
           <li>Deleting the Demo User is a forbidden action</li>
        </div>
        )}
        <h2 id="delete-user-msg">
          Are you sure you want to delete your account?
        </h2>
        <div className="modal-buttons">
          <button onClick={cancelDelete}>Cancel</button>
          <button onClick={deleteUser}>Delete Account</button>
        </div>
      </div>
    </main>
  );
};

export default DeleteUserModal;
