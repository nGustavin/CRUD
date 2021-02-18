import React from 'react';

import {Container, MenuBar, AddUser } from './styles'

const Header: React.FC = () => {
    return(
        <Container>
            <MenuBar size="25"/>
            <div>
                <input type="text" placeholder="Search User"/>
            </div>
            <AddUser size="25"/>
        </Container>
    )
}

export default Header