import React from 'react';
import classes from './MainContent.css';

const MainContent = (props) => {
    let classList = [classes.MainContent];

    if(props.sideNavOpen ) {
        classList = classList.concat(classes.SideNavOpen)
    }
    if(!props.sideNavOpen) {
        classList = classList.concat(classes.SideNavClosed)
    }

    return (
        <div className={classList.join(' ')}>
            {props.children}
        </div>
    );
};


export default MainContent;
