import React from 'react';
import classes from './Menu.css';
import MenuItem from "./MenuItem/MenuItem";

const Menu = (props) => {
    const menuItems = [
        {
            name: 'channel/' + props.channel.toLowerCase()
        },
        {
            name: 'settings/account'
        },
    ];

        return (
            <div className={classes.Menu}>
                {menuItems.map(menuItem => {
                    return(
                        <MenuItem
                            toggleMenu={props.toggleMenu}
                            key={menuItem.name}
                            linkProperties={menuItem}
                        />
                    )
                })}
            </div>
        );
};

export default Menu;
