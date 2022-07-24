
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UserMenu from './UserMenu';
import EventzeitLogo from "../../images/EventzeitMainLogo.png"

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  `

const Logo = styled.img`
width: 10em;
height: auto;
padding-top: 1em;
`

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (!user) setLoggedIn(false);
    if (user) setLoggedIn(true)
  }, [user, loggedIn])

  return (
    <NavigationBar>
      {!loggedIn &&
        <>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
              <Logo src={`${EventzeitLogo}`} />
            </NavLink>
          </div>
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        </>
      }
      {loggedIn && user &&
        <>
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
              <Logo src={`${EventzeitLogo}`} />
              </NavLink>
            </div>
            <div>
              Bonus: Search
            </div>
            <div>
              <UserMenu user={user} />
            </div>
        </>
      }
    </NavigationBar>
  );
}

export default NavBar;
