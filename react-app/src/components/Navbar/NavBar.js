
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import UserMenu from './UserMenu';

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
      {loggedIn && user &&
        <>
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to='/events'>
                Events
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
