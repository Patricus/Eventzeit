import React from "react";
import { useSelector } from "react-redux";

function Homepage() {
  const user = useSelector(state => state.session.user);

  return (
    <main>
      {user && (
        <>
          <p>{user.username}</p>
          <img src={user.avatar} alt="avatar"></img>
        </>
      )}
    </main>
  );
}

export default Homepage;
