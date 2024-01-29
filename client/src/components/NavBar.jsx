import {AppBar,Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111;
position:static;
`;

const TabsNavLink = styled(NavLink)`
    font-size:20px;
    margin-right:15px;
    color:#fff;
    text-decoration:none;
`;

const NavBar = () => {
    return(
        <Header>
            <Toolbar>
                <TabsNavLink to='/'>MERN-CRUD_App</TabsNavLink>
                <TabsNavLink to='/all'>All User</TabsNavLink>
                <TabsNavLink to='/add'>Add User</TabsNavLink>
            </Toolbar>
        </Header>
    )
}

export default NavBar;