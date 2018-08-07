import React from 'react';
import ReactDom, {Component} from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB0cutdUnYGWCnsrPPzWH9j3FypXbJNOV4';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {'videos': []};

    YTSearch({key:API_KEY, 'term':'surf'}, (videos) => {
      this.setState(videos)
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));
