import React, { Component } from 'react';
import SearchBar from './searchBar';
import youtube from '../apis/youtube';
import VideoDetail from '../components/videoDetail';
import VideoList from '../components/videoList';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount () {
        this.onTermSubmit('olas');
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    };

    render () {
        return (
        <div className='ui container'>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            videoSelect={this.onVideoSelect}
                            videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
        );
    };
};

const KEY = 'AIzaSyCOsVJSxa2QEbMfRdOYtb9KjWbvfbY2Hp4';

export default App;
