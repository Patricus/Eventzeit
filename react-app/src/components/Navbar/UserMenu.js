import React, { useState } from 'react';
import styled from 'styled-components'
import LogoutButton from '../auth/LogoutButton';

const DropDownMenu = styled.div`
display: flex;
flex-direction: column;
position: absolute;

`

const MenuButton = styled.p`
cursor: pointer;
`

function UserMenu({ user }) {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu(!showMenu)
    }
    
    return (
        <>
            {!showMenu &&
                <MenuButton onClick={openMenu}>User Menu</MenuButton>
            }
            {showMenu &&
                <div>
                    <MenuButton onClick={openMenu}>User Menu</MenuButton>
                    <DropDownMenu>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <LogoutButton />
                    </DropDownMenu>
                </div>
            }
        </>
    );
};

export default UserMenu;
