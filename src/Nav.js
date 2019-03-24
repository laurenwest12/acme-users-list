import React from "react";
import {Link, HashRouter} from "react-router-dom";


const Nav = () => {
    return (
        <HashRouter>
        <ul>
            <li><Link to="/">First</Link></li>
            <li><Link to='/'>Prev</Link></li>
            <li><Link to="/">Next</Link></li>
            <li><Link to="/161">Last</Link></li>
        </ul>
        </HashRouter>
    );
};

export default Nav;