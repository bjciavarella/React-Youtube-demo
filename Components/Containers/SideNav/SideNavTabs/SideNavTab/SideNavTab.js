import React from 'react';
import classes from './SideNavTab.css';
import {NavLink} from 'react-router-dom';

const SideNavTab = (props) => {

    let tabClass = classes.SideNavTab;
    let tabGroup = props.tabGroup;
    let linkName = props.name;

    if(tabGroup === 'primary') {
        tabClass = tabClass.concat(' ' + classes.primaryLink);
    }

    let tabLinkPrefix = props.page.split('/')[0];   //splitting the URL

    if(tabLinkPrefix.includes('settings')) {
        tabLinkPrefix = "/" + tabLinkPrefix + "/";
    }
    else {
        tabLinkPrefix = "/channel/";
    }

    if(tabGroup === 'primary') {
        switch (props.name) {
            case 'Home':
                tabLinkPrefix = '';
                linkName = '';
                break;

            default:
                tabLinkPrefix = '/feed/';
                break;

        }
    }


    return (
        <div>
            <li className={tabClass} onClick={props.toggleMenu}>
                    <NavLink
                        exact
                        to={tabLinkPrefix + linkName.replace(/[^\w]/gi, '').toLowerCase()}
                        activeClassName={classes.active}
                    >
                        {props.name}
                    </NavLink>
            </li>
        </div>
    );
};

export default SideNavTab;