import React from 'react';
import classes from './MenuItem.css';
import {NavLink} from 'react-router-dom';
import settingsImage from '../../../../../Assets/Images/settings.png';
import accountImage from '../../../../../Assets/Images/account.png';


const MenuItem = (props) => {
        return (
            <li className={classes.MenuItem}
                onClick={props.toggleMenu}
            >
                <NavLink
                    activeClassName={classes.active}
                    exact
                    to={"/" + props.linkProperties.name.replace(/\s/g, "")}
                >
                    <img
                         src={props.linkProperties.name.includes("settings") ? settingsImage : accountImage}
                         className={classes.menuImage}
                         alt={'main logo'}
                    />
                </NavLink>
            </li>
        );
};

export default MenuItem;
