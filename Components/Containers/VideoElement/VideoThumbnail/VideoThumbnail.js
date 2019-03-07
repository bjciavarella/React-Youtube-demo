import React from 'react';
import classes from './VideoThumbnail.css';

const VideoThumbnail = (props) => {

    return (
        <div className={classes.ThumbnailContainer}>
            <img className={classes.VideoThumbnail} src={props.image} alt={"thumbnail"} />
        </div>
    );
};

export default VideoThumbnail;