import React, { Component } from 'react';
import classes from './ChannelData.css';
import VideoElement from "../../Containers/VideoElement/VideoElement";
import SubscribeButton from "../../UI/SubscribeButton/SubscribeButton";
import axios from "axios";

class ChannelData extends Component {

    state = {
        subscribers: '',
        videos: []
    };

    componentDidMount() {
        this.makeRequestForChannelData(this.props.channelName)
            .then(result => {
                const subs = result.data.subscribers;
                const videos = result.data.videos;
                this.setState({
                    subscribers: subs,
                    videos: videos
                })
            });
    }

    componentWillReceiveProps(nextProps) {
        this.makeRequestForChannelData(nextProps.channelName)
            .then(result => {
                const subs = result.data.subscribers;
                const videos = result.data.videos;
                this.setState({
                    subscribers: subs,
                    videos: videos
                })
            });
    }

    render() {

        return(
            <div>
                <h1> {this.props.channelNameFormatted} </h1>
                <p> {this.state.subscribers} subscribers</p>
                <br/>
                <div className={classes.Subscribe}>
                    <SubscribeButton subscriberCount={this.state.subscribers}/>
                </div>
                <hr/>
                <br/>
                <div className={classes.VideosContainer} >
                    {
                        this.state.videos.map((video, index) => {
                            return (<VideoElement
                                key={index}
                                videoTitle={video.videoTitle}
                                viewCount={video.views}
                                postDate={video.postDate}
                            />)
                        })
                    }
                    {/*<VideoElement/>*/}
                </div>
                <hr/>
            </div>
        );
    };

    makeRequestForChannelData(channelName) {
        return axios.get('http://localhost:9000/channel/' + channelName)
    }


}


export default ChannelData;