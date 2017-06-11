import React, { Component } from 'react';
import './App.css';
import SearchPodcastForm from './SearchPodcastForm'

class App extends Component {

  constructor() {
    super();
    this.addPodcast = this.addPodcast.bind(this);
  }

  state = {
    podcasts: {}
  };

  addPodcast (podcast) {
    const podcasts = { ...this.state.podcasts };
    const timestamp = Date.now()
    podcasts[`podcast-${timestamp}`] = podcast;
    this.setState({ podcasts });
  }

  render () {
    return (
      <div className="App">
        <SearchPodcastForm addPodcast={this.addPodcast} />
      </div>
    );
  }
}

export default App;
