import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTickets } from "../../store/tickets";
import { getAllBookmarks } from "../../store/bookmarks";
import Ticket from "../Tickets/Ticket";
import styled from "styled-components";
import { destroyUser } from "../../store/session";
import { Redirect } from "react-router-dom";
import { logout } from "../../store/session";
import BookmarksPanel from "./BookmarkPanel";
import UserPanel from "./UserPanel";
import TicketPanel from "./TicketPanel";

const Avatar = styled.img`
  box-sizing: inherit;
  width: 40px;
  height: 40px;
`;

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const ticketsState = useSelector((state) => state.tickets);
  const tickets = Object.values(ticketsState);

  useEffect(() => {
    if (!user) return;
    dispatch(getAllTickets(user.id));
  }, [dispatch, user]);

  const deleteUser = async () => {
    await dispatch(destroyUser(user.id));
    await dispatch(logout());
    history.push("/events");
  };

  if (!user) return <Redirect to={"/"} />;
  if (user) {
    return (
      <main>
        <BookmarksPanel />
        <UserPanel user={user} tickets={tickets} />
        <TicketPanel tickets={tickets}/>
        <div>
          <button onClick={deleteUser}>Delete User Account</button>
        </div>
      </main>
    );
  }
}

export default Dashboard;
