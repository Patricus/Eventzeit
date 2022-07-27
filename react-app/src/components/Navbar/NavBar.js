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
  width: 9em;
  height: auto;
  padding-top: 5%;
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
    <div>
      <div
        className="navBarWrapper"
        style={{
          // backgroundColor: "green",
          paddingLeft: "20px",
          height: "70px",
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
                <button
                  onClick={demoLogIn}
                  className="navlink"
                  style={{
                    // fontSize: "16px",
                    border: "0px",
                    backgroundColor: "white",
                  }}
                >
                  Demo User
                </button>
              </div>
              <div>
                <NavLink
                  to="/login"
                  exact={true}
                  activeClassName="active"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="navlink">Login</p>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/sign-up"
                  exact={true}
                  activeClassName="active"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="navlink">Sign Up</p>
                </NavLink>
              </div>
            </>
          )}
          {loggedIn && user && (
            <>
              {/* <div>
                  <NavLink to='/' exact={true} activeClassName='active'>
                  <Logo src={`${EventzeitLogo}`} />
                  </NavLink>
                </div> */}
              <div>
                <NavLink
                  to="/events/create"
                  activeClassName="active"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="navlink">Create</p>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/events"
                  activeClassName="active"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="navlink">Events</p>
                </NavLink>
              </div>
              <div
                style={{
                  color: "#191923",
                  fontFamily: "Eina-semibold",
                }}
              >
                <UserMenu user={user} />
              </div>
            </>
          )}
        </NavigationBar>
      </div>
      <div
        style={{ backgroundColor: "#191923", height: "1.5px", opacity: "30%" }}
      />
    </div>
  );
};

export default NavBar;
