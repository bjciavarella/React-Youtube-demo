import React from 'react';
import classes from './SideNavTabs.css';
import SideNavTab from "./SideNavTab/SideNavTab";

const SideNavTabs = (props) => {

    const SettingsTabsArray = [
        "Account",
        "Notifications",
        "Billing",
        "History and Privacy",
        "Advanced"
    ];

    let sideNavPrimaryLinks = [
        "Home",
        "Trending",
        "History"
    ];

    let SideNavTabArray = [];
    let primaryLinks = '';
    let groupTitle = 'Subscriptions';

    if(props.page.includes('settings')) {
        SideNavTabArray = SettingsTabsArray;
        groupTitle = 'Settings';
    }
    else {
        SideNavTabArray = props.subscriptions;
    }

    if(!groupTitle.includes('Settings')) {
        primaryLinks = (
            <div className={classes.SideNavTabs}>
                {sideNavPrimaryLinks.map((primaryLink, index) => {
                    return (
                        <SideNavTab
                            page={props.page}
                            toggleMenu={props.toggleMenu}
                            key={index}
                            name={primaryLink}
                            tabGroup={'primary'}
                        />
                    )
                })}
                <hr/>
            </div>
        )
    }


    return (
        <div className={classes.SideNavTabs}>
            {primaryLinks}

            <p className={classes.Title}> {groupTitle} </p>

            {SideNavTabArray.map((sideNavTabItem, index) => {
                return (
                    <SideNavTab
                        page={props.page}
                        toggleMenu={props.toggleMenu}
                        key={index}
                        name={sideNavTabItem}
                        tabGroup={sideNavPrimaryLinks.includes(sideNavTabItem) ? 'primary' : 'sub'}
                    />
                )
            })}
            <hr/>
        </div>
    );
};

export default SideNavTabs;
