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
  // padding-top: 15%;
  align-self: center;
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
      className="navBarWrapper"
      style={{
        // backgroundColor: "green",
        paddingLeft: "20px",
        height: "80px",
        // margin: "0px"
      }}
    >
      <div
        className="navBarDiv1"
        style={{
          // backgroundColor: "red",
          height: "100%",
          // alignItems: "center",
        }}
      >
        <NavLink
          to="/"
          exact={true}
          activeClassName="navlink navBarDiv1"
          style={{
            // backgroundColor: "blue",
            width: "205px",
            height: "100%",
          }}
        >
          <Logo src={`${EventzeitLogo}`} />
        </NavLink>
      </div>
      <NavigationBar className="navBarDiv2">
        {!loggedIn && (
          <>
            <div>
              <button onClick={demoLogIn} className="navlink">
                Demo User
              </button>
            </div>
            <div>
              <NavLink
                to="/login"
                exact={true}
                activeClassName="navlink"
                style={{ textDecoration: "none" }}
              >
                Login
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/sign-up"
                exact={true}
                activeClassName="navlink"
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
