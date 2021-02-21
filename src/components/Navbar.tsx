import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Menu from 'antd/lib/menu';


const Navbar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <Link to="/"> Dictionary </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/study"> Study </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;