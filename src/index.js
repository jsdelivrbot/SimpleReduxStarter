import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB0cutdUnYGWCnsrPPzWH9j3FypXbJNOV4';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
    };  
    this.videoSearch('js');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0],
      });
    });
  }

  render() {
    let videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermsChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));
