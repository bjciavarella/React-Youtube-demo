import React from 'react';
import classes from './VideoElement.css';
import VideoThumbnail from "./VideoThumbnail/VideoThumbnail";
import VideoProperties from "./VideoProperties/VideoProperties";
import videoThumbnail from '../../../Assets/Images/video_thumbnail.jpg';


const VideoElement = (props) => {
        return (
            <div className={classes.VideoElement}>
                <VideoThumbnail
                    image={videoThumbnail}
                />
                <VideoProperties
                    videoTitle={props.videoTitle}
                    channel={props.channel}
                    postDate={props.postDate}
                    viewCount={props.viewCount}
                />
            </div>
        );
};

export default VideoElement;
