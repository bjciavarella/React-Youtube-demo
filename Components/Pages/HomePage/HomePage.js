import React, { Component } from 'react';
import VideoRow from "../../Containers/VideoRow/VideoRow";

class HomePage extends Component {

    videoArray = [
        {
            videoTitle: 'New Nvidia Graphics card',
            channel: 'Linus Tech Tips',
            postDate: '1/24/2019',
            viewCount: '24352'
        },
        {
            videoTitle: 'New AMD CPU Ryzen 2700 vs Intel',
            channel: 'JayzTwoCents',
            postDate: '2/4/2019',
            viewCount: '9353535'
        },
        {
            videoTitle: 'Cablemod review',
            channel: 'BitWit',
            postDate: '12/11/2018',
            viewCount: '532'
        },
        {
            videoTitle: 'New AR15',
            channel: 'Demolition Ranch',
            postDate: '5/29/2016',
            viewCount: '4535'
        },
        {
            videoTitle: 'Exploding Tacos',
            channel: 'TheBackyardScientist',
            postDate: '3/3/2019',
            viewCount: '253353'
        },
        {
            videoTitle: 'The ipod human',
            channel: 'Nigahiga',
            postDate: '10/11/2013',
            viewCount: '42536364'
        },
        {
            videoTitle: 'How to build a computer',
            channel: 'Paul\'s Hardware',
            postDate: '4/13/2015',
            viewCount: '35'
        },

    ];


    render() {
        let videosPerRow = 6;

        if(this.props.width <=  1500) {
            videosPerRow = (this.props.width / 285).toFixed(0)
        }

        return (
            <div>
                <VideoRow  videosPerRow={videosPerRow} contentHeading={"Recommended"}/>
                <VideoRow  videosPerRow={videosPerRow} contentHeading={"Linus Tech Tips"}/>
            </div>
        );
    }
}

export default HomePage;


