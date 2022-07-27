import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoutButton from "../auth/LogoutButton";
import "./navBar.css";

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const MenuButton = styled.div`
  cursor: pointer;
`;

function UserMenu({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navlink" style={{ textDecoration: "none" }}>
      {!showMenu && (
        <MenuButton onClick={openMenu}>
          <div className="profile-container" style={{ width: "130px" }}>
            <div className="profile-icon"></div>
            <div className="navlink" style={{ paddingTop: "4px" }}>
              Hi, {user.username} !
            </div>
          </div>
        </MenuButton>
      )}
      {showMenu && (
        <div>
          <MenuButton onClick={openMenu}>
            <div className="profile-container" style={{ width: "130px" }}>
              <div className="profile-icon"></div>
              <p className="navlink" style={{ paddingTop: "4px" }}>
                Hi, {user.username} !
              </p>
            </div>
          </MenuButton>
          <DropDownMenu>
            <div className="user-profile-container navlink">
              <NavLink
                to={`/dashboard/${user.id}`}
                onClick={openMenu}
                style={{ textDecoration: "none" }}
              >
                <p className="navlink">My Dashboard</p>
              </NavLink>
              <p style={{ fontFamily: "Eina" }}>{user.username}</p>
              <p style={{ fontFamily: "Eina" }}>{user.email}</p>
              <LogoutButton />
            </div>
          </DropDownMenu>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
