import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets } from "../../store/tickets";
import { getAllBookmarks } from "../../store/bookmarks";
import Ticket from "../Tickets/Ticket";
import styled from "styled-components";

const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const ticketsState = useSelector((state) => state.tickets);
  const bookmarksState = useSelector((state) => state.bookmarks);
  const tickets = Object.values(ticketsState);
  //   const bookmarks = Object.values(bookmarksState);

  useEffect(() => {
    dispatch(getAllTickets(user.id));
    dispatch(getAllBookmarks(user.id));
  }, [dispatch, user]);

  return (
    <main>
      <h1>My Dashboard</h1>
      <Avatar src={user.avatar} alt="user avatar" />
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
    </main>
  );
}

export default Dashboard;
