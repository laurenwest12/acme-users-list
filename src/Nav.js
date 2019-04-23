import React from "react";

const Nav = ({location: {pathname}}) => {
    return (
    <div>
        <h1>Acme Users</h1>
        <ul className = 'nav nav-tabs'>
                <li key = 'Home'>
                <a className = {`nav-link${'/' === pathname ? ' active': ''}`} href = '/#'>Home</a>
                </li>

                <li key = 'Users'>
                <a className = {`nav-link${pathname.includes('/users') ? ' active': ''}`} href = '/#/users'>Users</a>
                </li>
            
        </ul>
    </div>)
};

export default Nav;