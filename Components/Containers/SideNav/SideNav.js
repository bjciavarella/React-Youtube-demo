import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import classes from './SideNav.css';
import SideNavTabs from "./SideNavTabs/SideNavTabs";

class SideNav extends Component {
    render() {
        let path = this.props.location.pathname.substring(1, this.props.location.pathname.length);
        let sideNavClass = [classes.SideNav, classes.Closed];
        if(this.props.sideNavOpen) {
            sideNavClass = [classes.SideNav, classes.Open]
        }
        return (
            <div className={sideNavClass.join(' ')}>
                <SideNavTabs
                    subscriptions={this.props.subscriptions}
                    toggleMenu={this.props.toggleMenu}
                    page={path}
                />
            </div>
        );
    }
}

export default withRouter(SideNav);
