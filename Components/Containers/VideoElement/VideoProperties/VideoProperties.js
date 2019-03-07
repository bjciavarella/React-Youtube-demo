import React from 'react';
import classes from './VideoProperties.css';
import {NavLink} from 'react-router-dom';

const VideoProperties = (props) => {

    return (
        <div className={classes.VideoProperties}>
            <NavLink to={props.videoTitle.replace(/\s/g, "")} className={classes.VideoTitle}> {props.videoTitle} </NavLink>
            {props.channel ? <NavLink to={"/User/" + props.channel.replace(/\s/g, "")} className={classes.PropertyRow}> {props.channel} </NavLink> : <p></p>}
            <p className={classes.PropertyRow}> {props.viewCount} Views | {props.postDate} </p>
        </div>
    );
};

export default VideoProperties;