import React from 'react';
import '../css/videoItem.css';

const VideoItem = ({ video, videoSelect }) => {
    return (
        <div onClick={() => videoSelect(video)} className='video__item item'>
            <img
                className='video__image ui image'
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}/>
            <div className='content'>
                <div className='header'>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;