import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB0cutdUnYGWCnsrPPzWH9j3FypXbJNOV4';

// This is a component which will produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Get the generated HTML of component and render it to the page in to the DOM
ReactDom.render(<App />, document.querySelector('.container'));
