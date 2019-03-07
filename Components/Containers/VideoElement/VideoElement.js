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
                    videoTitle={"The Video Title is very long this time so we can test wrap around"}
                    channel={props.channel}
                    postDate={"1/23/4567"}
                    viewCount={12345}
                />
            </div>
        );
};

export default VideoElement;
