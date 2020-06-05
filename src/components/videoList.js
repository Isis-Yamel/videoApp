import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({  videos,  videoSelect}) => {

    const renderVideos = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            videoSelect={videoSelect}
            video={video}/>
    });

    return (
        <div className='ui relaxed divided list'>
            {renderVideos}
        </div>
    );
};

export default VideoList;