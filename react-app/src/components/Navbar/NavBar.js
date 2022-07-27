import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import UserMenu from "./UserMenu";
import EventzeitLogo from "../../images/EventzeitMainLogo.png";
import { login } from "../../store/session";
import "./navBar.css";

const NavigationBar = styled.div`
  margin-left: 20vw;
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 13em;
  height: auto;
  padding-top: 0em;
`;

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!user) setLoggedIn(false);
    if (user) setLoggedIn(true);
  }, [user, loggedIn]);

  const demoLogIn = () => {
    dispatch(login("demo@aa.io", "password"));
  };

  return (
    <div
      // className="navBarWrapper"
      style={{ backgroundColor: "green" }}
    >
      <div
        className="navBarDiv1"
        style={{
          // backgroundColor: "red",
          width: "205px",
        }}
      >
        <NavLink to="/" exact={true} activeClassName="active">
          <Logo src={`${EventzeitLogo}`} />
        </NavLink>
      </div>
      <NavigationBar className="navBarDiv2">
        {!loggedIn && (
          <>
            <div>
              <button onClick={demoLogIn}>Demo User</button>
            </div>
            <div>
              <NavLink
                to="/login"
                exact={true}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Login
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/sign-up"
                exact={true}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Sign Up
              </NavLink>
            </div>
          </>
        )}
      </NavigationBar>
    </div>
  );
};

export default NavBar;
