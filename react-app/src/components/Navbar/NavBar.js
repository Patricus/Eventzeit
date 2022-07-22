
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styled from 'styled-components'

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
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
              Eventzeit Logo to '/''
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
      {loggedIn &&
        <>
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </div>
            <div>
              Bonus: Search
            </div>
            <div>
              <button>
                Account Menu Button
              </button>
              <LogoutButton />
            </div>
        </>
      }
    </NavigationBar>
  );
}

export default NavBar;
