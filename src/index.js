import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB0cutdUnYGWCnsrPPzWH9j3FypXbJNOV4';



class App extends Component {
  constructor(props) {
    // console.log(props);
    super(props);

    this.state = { videos: []};

    YTSearch({key:API_KEY, term:'surf'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));
