import React from "react";
import { useSelector } from "react-redux";

function Homepage() {
  const user = useSelector((state) => state.session.user);

  return (
    <main>
      <div style={{
        padding: "30px"
      }}>
        {user && (
          <>
            <h3
              style={{
                fontFamily: "Eina-bold",
                fontWeight: "400px",
              }}
            >
              {user.username}
            </h3>
            <img
              src={user.avatar}
              alt="avatar"
              style={{
                width: "200px",
                height: "auto",
              }}
            ></img>
          </>
        )}
      </div>
    </main>
  );
}

export default Homepage;
