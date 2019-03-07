import React from 'react';
import classes from './SubscribeButton.css';

const SubscribeButton = (props) => {
    let subscriberCount = props.subscriberCount;


    if(subscriberCount > 1000 && subscriberCount < 1000000) {
        subscriberCount = (Math.round(subscriberCount) / 1000).toFixed(0) + 'K'
    }
    if(subscriberCount > 1000000) {
        subscriberCount = (Math.round(subscriberCount) / 1000000).toFixed(1) + 'M'
    }


    return (
        <div className={classes.SubscribeButton}>
            SUBSCRIBE <div className={classes.Subscribers}>{subscriberCount}</div>
        </div>
    )
};

export default SubscribeButton;
