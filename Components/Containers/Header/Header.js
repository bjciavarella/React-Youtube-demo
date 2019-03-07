import React from 'react';
import classes from './Header.css';
import Menu from "./Menu/Menu";
import playLogo from '../../../Assets/Images/play_button.png';
import hamburgerIcon from '../../../Assets/Images/hamburger_icon.png';


const Header = (props) => {
     return (
            <div className={classes.Header}>
                <img src={hamburgerIcon}
                     alt={"toggle menu"}
                     className={classes.Hamburger}
                     onClick={props.toggleMenu}
                 />

                <a href={"/"}>
                    <img src={playLogo}
                         className={classes.Logo}
                         alt={'main logo'}
                    />
                </a>
                <Menu
                    channel={props.channel}
                    toggleMenu={(props.condensedUi && props.sideNavOpen) ? props.toggleMenu : null}
                />
            </div>
        );
};

export default Header;
