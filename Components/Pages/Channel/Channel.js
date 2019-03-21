import React, { Component } from 'react';
import classes from './Channel.css';
import {Route, Switch, withRouter} from "react-router-dom";
import ChannelData from "../../Containers/ChannelData/ChannelData";

class Channel extends Component {

    componentDidMount() {
        // console.log(this.makeRequestForChannelData(this.props.location.pathname.substring(1, this.props.location.pathname.length).split("/")[1]));
    }

    render() {
        let path = this.props.location.pathname.substring(1, this.props.location.pathname.length);
        let channelName = path.split("/")[1];
        let routes = null;
        let channelNameFormatted = this.props.validateAndGetFormattedChannelName(channelName);
        if(channelNameFormatted) {
            routes = (
                <div>
                    <Switch>
                        <Route
                            path={"/channel/" + channelName}
                            render={() => <ChannelData channelNameFormatted={channelNameFormatted} channelName={channelName}/>}
                        />
                    </Switch>
                </div>
            );
        }
        return (
            <div className={classes.Channel}>
                {routes}
            </div>
        )
    }
}


export default withRouter(Channel);