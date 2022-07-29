import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoutButton from "../auth/LogoutButton";
import "./navBar.css";

const DropDownMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    box-shadow: 0 0 4px 2px black;
    border-radius: 4px;
    background-color: white;
    width: 100px;
    top: 8px;
    left: 3px;
    padding: 5px;
    gap: 3px;
`;

const MenuButton = styled.div`
    cursor: pointer;
    width: 150px;
`;

function UserMenu({ user }) {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (!showMenu) return setShowMenu(true);
    };

    const closeMenu = e => {
        if (e.target.classList.contains("dropdown") || e.target.classList.contains("profile-icon"))
            return;
        setShowMenu(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => document.removeEventListener("mousedown", closeMenu);
    }, [showMenu]);

    return (
        <div className="navlink" style={{ textDecoration: "none" }}>
            <MenuButton onClick={openMenu}>
                <div className="profile-container" style={{ width: "150px" }}>
                    <div className="user-profile-container">
                        <div
                            className="profile-icon"
                            style={{
                                backgroundImage: `url(${user.avatar})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "none",
                                height: "24px",
                                width: "24px",
                                marginRight: "0px",
                                float: "left",
                            }}></div>
                    </div>
                    <div className="navlink dropdown" style={{ paddingTop: "7px" }}>
                        Hi, {user.username} !
                    </div>
                </div>
            </MenuButton>
            {showMenu && (
                <div style={{ position: "relative" }}>
                    <DropDownMenu className="dropdown">
                        <NavLink
                            to={`/dashboard/${user.id}`}
                            onClick={openMenu}
                            style={{ textDecoration: "none" }}>
                            <p className="navlink">My Dashboard</p>
                        </NavLink>
                        <p className="dropdown" style={{ fontFamily: "Eina" }}>
                            {user.username}
                        </p>
                        <p className="dropdown" style={{ fontFamily: "Eina" }}>
                            {user.email}
                        </p>
                        <LogoutButton />
                    </DropDownMenu>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
