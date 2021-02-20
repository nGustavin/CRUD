import React from 'react';
import { Link } from 'react-router-dom';

import {Container, MenuBar, AddUser } from './styles'

const Header: React.FC = () => {
    return(
        <Container>
            <MenuBar size="25"/>
            <div>
                <input type="text" placeholder="Search User"/>
            </div>
            <Link to="/create-user">
                <AddUser size="25"/>
            </Link>
        </Container>
    )
}

export default Header