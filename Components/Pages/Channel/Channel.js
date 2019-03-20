import React, { Component } from 'react';
import classes from './Channel.css';
import {Route, Switch, withRouter} from "react-router-dom";
import VideoElement from "../../Containers/VideoElement/VideoElement";
import SubscribeButton from "../../UI/SubscribeButton/SubscribeButton";
import axios from "axios";

class Channel extends Component {

    componentDidMount() {
        // this.props.makeRequestForChannelData(this.props.location.pathname.substring(1, this.props.location.pathname.length).split("/")[1]);
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

    makeRequestForChannelData(channelName) {
        return axios.get('http://localhost:9000/channel/' + channelName)
            .then(response =>  {
                return response.data
            });
    }

    getChannelData = (channelName, channelNameFormatted) => {
        let channelData = this.makeRequestForChannelData(channelName).then(data => {
            console.log(data)
        });

        return(
            <div>
                <h1> {channelNameFormatted} </h1>
                {/*<p> {channelData.subscribers} subscribers</p>*/}
                <br/>
                <div className={classes.Subscribe}>
                    {/*<SubscribeButton subscriberCount={channelData.subscriberCount}/>*/}
                </div>
                <hr/>
                <br/>
                <div className={classes.VideosContainer} >
                    {/*<VideoElement/>*/}
                </div>
                <hr/>
            </div>
        );
    };
}


export default withRouter(Channel);