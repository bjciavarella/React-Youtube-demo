import React, { Component } from 'react';
import classes from './Channel.css';
import {Route, Switch, withRouter} from "react-router-dom";
import VideoElement from "../../Containers/VideoElement/VideoElement";
import SubscribeButton from "../../UI/SubscribeButton/SubscribeButton";

class Channel extends Component {

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
                            render={() => this.getChannelData(channelName, channelNameFormatted)}
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

    getChannelData = (channelName, channelNameFormatted) => {
        let channelData = '';
        this.channelInfo.forEach(function(channel) {
            if (channel.name === channelName) {
                channelData = channel;

            }
        });

        return(
            <div>
                <h1> {channelNameFormatted} </h1>
                <p> {channelData.subscriberCount} subscribers</p>
                <br/>
                <div className={classes.Subscribe}>
                    <SubscribeButton subscriberCount={channelData.subscriberCount}/>
                </div>
                <hr/>
                <br/>
                <div className={classes.VideosContainer} >
                    <VideoElement/>
                    <VideoElement/>
                    <VideoElement/>
                    <VideoElement/>
                    <VideoElement/>
                </div>
                <hr/>
            </div>
        );
    };

    channelInfo = [
        {
            name: 'nigahiga',
            subscriberCount: 21800024
        },
        {
            name: 'etcg1',
            subscriberCount: 200323
        },
        {
            name: 'jerryrigeverything',
            subscriberCount: 1800024
        },
        {
            name: 'paulshardware',
            subscriberCount: 3800024
        },
        {
            name: 'thebackyardscientist',
            subscriberCount: 400024
        },
        {
            name: 'linustechtips',
            subscriberCount: 680064
        },
        {
            name: 'node',
            subscriberCount: 13024
        },
        {
            name: 'demolitionranch',
            subscriberCount: 8024535
        },
        {
            name: 'jayztwocents',
            subscriberCount: 24
        },
        {
            name: 'bitwit',
            subscriberCount: 235
        },
    ];

}

export default withRouter(Channel);