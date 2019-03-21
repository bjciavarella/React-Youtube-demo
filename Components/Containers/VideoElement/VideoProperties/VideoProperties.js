import React from 'react';
import classes from './VideoProperties.css';
import {NavLink} from 'react-router-dom';

const VideoProperties = (props) => {

    return (
        <div className={classes.VideoProperties}>
            <NavLink
                to={props.videoTitle.replace(/\s/g, "")}
                className={classes.VideoTitle}
            >
                {props.videoTitle}
            </NavLink>

            {props.channel ?
                <NavLink
                    to={"/channel/" + props.channel.replace(/[^\w]/gi, '').toLowerCase()}
                    className={classes.PropertyRow + " " + classes.spacer}
                >
                    {props.channel}
                </NavLink>
                :
                null
            }
            <p className={classes.PropertyRow}>
                {props.viewCount} Views | {props.postDate}
            </p>
        </div>
    );
};

export default VideoProperties;