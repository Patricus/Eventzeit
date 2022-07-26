import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { getAllTickets } from "../../store/tickets";
import Ticket from "../Tickets/Ticket";
import styled from "styled-components";
import { destroyUser } from "../../store/session";
import { logout } from '../../store/session';
import { Modal } from "../Global/Elements/Modal";
import EditUserForm from "../auth/EditUserForm";

const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const ticketsState = useSelector((state) => state.tickets);
  const tickets = Object.values(ticketsState);

  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);

  useEffect(() => {
    if (!user) return;
    dispatch(getAllTickets(user.id));
  }, [dispatch, user]);

  const updateUserModal = async () => {
    setShowUpdateUserModal(true);
  };

  const deleteUser = async () => {
    await dispatch(destroyUser(user.id));
    await dispatch(logout())
    history.push("/events");
  };

  if (!user) return <Redirect to={"/"} />;
  if (user) {
    return (
      <main>
        <h1>My Dashboard</h1>
        <Avatar src={user.avatar} alt="user avatar" />
        {showUpdateUserModal && (
            <Modal onClose={() => setShowUpdateUserModal(false)}>
              <EditUserForm />
            </Modal>
          )}
        <h3>Tickets</h3>
        {tickets ? (
          <ul>
            {tickets.map((ticket) => {
              return <Ticket key={ticket.id} ticket={ticket} />;
            })}
          </ul>
        ) : (
          <p>Loading</p>
        )}
        <div>
          <button onClick={updateUserModal}>Update User Account</button>
          <button onClick={deleteUser}>Delete User Account</button>
        </div>
      </main>
    );
  }
}

export default Dashboard;
