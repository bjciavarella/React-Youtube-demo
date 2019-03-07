import React, { Component } from 'react';
import classes from './Settings.css';
import {Route, Switch} from "react-router-dom";
import Notifications from "./Notifications/Notifications";
import Account from "./Account/Account";

class Settings extends Component {


    render() {
        let routes = (
            <div>
                <Switch>
                    <Route
                        path={"/settings/notifications"}
                        render={() => <Notifications/>}
                    />
                    <Route
                        path={"/settings/account"}
                        render={() => <Account/>}
                    />
                    <Route
                        path={"/settings/billing"}
                        render={() => <div> Billing Page</div>}
                    />
                    <Route
                        path={"/settings/historyandprivacy"}
                        render={() => <div> History and privacy </div>}
                    />
                    <Route
                        path={"/settings/advanced"}
                        render={() => <div> Advanced </div>}
                    />
                </Switch>
            </div>
        );

        return (
            <div className={classes.Settings}>
                <h1> {this.props.channel}'s Settings Page </h1>
                <br/><hr/>
                <br/>
                {routes}
            </div>
        )
    }
}

export default Settings;